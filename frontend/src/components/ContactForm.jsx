import React, { useState } from 'react';
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    // error remove while typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ""
      });
    }
  };

  // validation function
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

    if (!form.tel.trim()) {
      newErrors.tel = "Enter phone number";
    } else if (!/^[0-9]{10}$/.test(form.tel)) {
      newErrors.tel = "Phone must be 10 digits";
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
      await axios.post("https://oltechsolutions-7.onrender.com/api/contact", form);

      alert("Form submitted successfully!");

      setForm({
        name: "",
        email: "", 
        tel: "",
        message: ""
      });

    } catch (error) {
      alert("Error submitting form");
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
        {errors.name && <small style={{color:"red"}}>{errors.name}</small>}

        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <small style={{color:"red"}}>{errors.email}</small>}

        <input
          type="tel"
          name="tel"
          placeholder="Phone Number"
          value={form.tel}
          onChange={handleChange}
        />
        {errors.tel && <small style={{color:"red"}}>{errors.tel}</small>}

        <textarea
          name="message"
          placeholder="Write Message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <small style={{color:"red"}}>{errors.message}</small>}

        <button type='submit' className="submit">Submit</button>

      </form>
    </div>
  );
};

export default ContactForm;
