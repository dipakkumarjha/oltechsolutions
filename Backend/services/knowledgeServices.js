
const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");

const KNOWLEDGE_DIR = path.join(__dirname, "..", "knowledge");

const CHUNK_SIZE = 1200;
const CHUNK_OVERLAP = 200;

let cachedChunks = null;
let loadingPromise = null;

// Split extracted PDF text into smaller overlapping chunks.
function splitIntoChunks(text, source) {
  const cleanText = text
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const chunks = [];
  let start = 0;

  while (start < cleanText.length) {
    const end = Math.min(start + CHUNK_SIZE, cleanText.length);
    const content = cleanText.slice(start, end).trim();

    if (content) {
      chunks.push({
        source,
        content
      });
    }

    if (end === cleanText.length) break;

    start = end - CHUNK_OVERLAP;
  }

  return chunks;
}

// Read all PDFs from the private knowledge folder.
async function loadKnowledge() {
  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    throw new Error("Knowledge folder was not found.");
  }

  const files = fs.readdirSync(KNOWLEDGE_DIR)
    .filter(file => file.toLowerCase().endsWith(".pdf"));

  if (files.length === 0) {
    throw new Error("No PDF files found in the knowledge folder.");
  }

  const allChunks = [];

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_DIR, file);
    const buffer = fs.readFileSync(filePath);
    const parsed = await pdfParse(buffer);

    if (!parsed.text || !parsed.text.trim()) {
      console.warn(
        `No readable text found in ${file}. It may be a scanned PDF.`
      );
      continue;
    }

    const chunks = splitIntoChunks(parsed.text, file);
    allChunks.push(...chunks);

    console.log(`Knowledge loaded: ${file} (${chunks.length} chunks)`);
  }

  if (allChunks.length === 0) {
    throw new Error(
      "No readable PDF text found. Scanned PDFs may need OCR."
    );
  }

  console.log(`Total knowledge chunks: ${allChunks.length}`);

  return allChunks;
}

// Cache extracted knowledge in server memory.
async function getKnowledge() {
  if (cachedChunks) {
    return cachedChunks;
  }

  if (!loadingPromise) {
    loadingPromise = loadKnowledge()
      .then(chunks => {
        cachedChunks = chunks;
        return chunks;
      })
      .finally(() => {
        loadingPromise = null;
      });
  }

  return loadingPromise;
}

// Basic keyword search.
// Semantic multilingual search will be added next.
function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getKeywords(text) {
  const stopWords = new Set([
    "the", "is", "are", "was", "were", "what", "which",
    "who", "how", "can", "could", "please", "tell", "me",
    "about", "for", "and", "our", "your", "you", "hai",
    "hain", "ka", "ki", "ke", "ko", "kya", "kaise",
    "batao", "bataiye", "mujhe", "hai", "aur", "mein",
    "se", "kya", "koi", "chahiye"
  ]);

  return [...new Set(
    normalizeText(text)
      .split(" ")
      .filter(word => word.length > 1 && !stopWords.has(word))
  )];
}

// Return the most relevant chunks for a question.
async function getRelevantContext(query, maxChunks = 5) {
  if (typeof query !== "string" || !query.trim()) {
    return "";
  }

  const chunks = await getKnowledge();
  const keywords = getKeywords(query);

  if (keywords.length === 0) {
    return "";
  }

  const results = chunks.map(chunk => {
    const content = normalizeText(chunk.content);
    let score = 0;

    for (const keyword of keywords) {
      if (content.includes(keyword)) {
        score += 1;

        // Give a small boost when the keyword appears repeatedly.
        const matches = content.split(keyword).length - 1;
        score += Math.min(matches - 1, 3) * 0.15;
      }
    }

    return {
      ...chunk,
      score
    };
  });

  return results
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxChunks)
    .map((item, index) =>
      `[Source ${index + 1}: ${item.source}]\n${item.content}`
    )
    .join("\n\n---\n\n");
}

// Clear cached PDFs after replacing files, if needed.
function clearKnowledgeCache() {
  cachedChunks = null;
}

module.exports = {
  getKnowledge,
  getRelevantContext,
  clearKnowledgeCache
};
