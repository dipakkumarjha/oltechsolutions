// import React, { useState } from 'react';
// import axios from "axios";
// import "./ContactForm.css";

// import PhoneInput, {  isValidPhoneNumber,} from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const ContactForm = () => {

//   const [form, setForm] = useState({
//     name: "", 
//     email: "",
//     tel: "",
//     message: ""
//   });
//    const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });

//     // error remove while typing
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ""
//       });
//     }
//   };

//   // validation function
//   const validate = () => {
//     let newErrors = {};

//     if (!form.name.trim()) {
//       newErrors.name = "Enter your name";
//     }

//     if (!form.email.trim()) {
//       newErrors.email = "Enter your email";
//     } else if (!/\S+@\S+\.\S+/.test(form.email)) {
//       newErrors.email = "Invalid email";
//     }

//     if (!form.tel.trim()) {
//       newErrors.tel = "Enter phone number";
//     } else if (!/^[0-9]{10}$/.test(form.tel)) {
//       newErrors.tel = "Phone must be 10 digits";
//     }

//     if (!form.message.trim()) {
//       newErrors.message = "Enter message";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       await axios.post("https://oltechsolutions-7.onrender.com/api/contact", form ,  { timeout: 1000 });

//       alert("Form submitted successfully!");
       
 
//       setForm({
//         name: "",
//         email: "",
//         tel: "",
//         message: ""
//       });

//     } catch (error) {
//       console.log(error); // 🔥 see real error
//       alert(error.response?.data?.message || "Error submitting form");
//     }
//   };

//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email ID"
//           value={form.email}
//           onChange={handleChange}
//         />
//         {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

//         <input
//           type="tel"
//           name="tel"
//           placeholder="Phone Number"
//           value={form.tel}
//           onChange={handleChange}
//         />
//         {errors.tel && <small style={{ color: "red" }}>{errors.tel}</small>}

//         <textarea
//           name="message"
//           placeholder="Write Message"
//           value={form.message}
//           onChange={handleChange}
//         />
//         {errors.message && <small style={{ color: "red" }}>{errors.message}</small>}

//         <button type='submit' className="submit">Submit</button>

//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handlePhoneChange = (value) => {
    setForm({
      ...form,
      tel: value || "",
    });

    if (errors.tel) {
      setErrors({
        ...errors,
        tel: "",
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Enter your name";
    }

    if (!form.email.trim()) {
      newErrors.email = "Enter your email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.tel) {
      newErrors.tel = "Enter phone number";
    } else if (!isValidPhoneNumber(form.tel)) {
      newErrors.tel = "Invalid phone number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Enter message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await axios.post("https://oltechsolutions-7.onrender.com/api/contact",form) ;
      // await axios.post("http://localhost:5000/api/contact",form) ;
      alert("Form submitted successfully!");

      setForm({
        name: "",
        email: "",
        tel: "",
        message: "", 
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Error submitting form");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}

        <PhoneInput
          international
          defaultCountry="IN"
          value={form.tel}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
          className="custom-phone-input"
        />
        {errors.tel && <small style={{ color: "red" }}>{errors.tel}</small>}

        <textarea
          name="message"
          placeholder="Write Message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && (
          <small style={{ color: "red" }}>{errors.message}</small>
        )}

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;


