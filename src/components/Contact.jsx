import React from 'react';
import { CONTACT } from '../constraints';
import { motion } from 'framer-motion';
import { FaHome, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Swal from 'sweetalert2'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "78de2819-f4f5-449d-a0b9-23e365f96c98");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            Swal.fire({
                title: "Sucess!",
                text: "Message sent successfully",
                icon: "success"
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="border-b border-neutral-700 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl text-neutral-100">Get in Touch</motion.h2>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start max-w-6xl mx-auto px-4 lg:space-x-8">
                {/* Left Side - Contact Details */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 3 }}
                    className="w-full lg:w-1/3 bg-neutral-900 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg text-neutral-200 mb-8 lg:mb-0"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="mb-4 flex items-center space-x-2">
                        <FaHome className="text-lg" />
                        <p className="font-semibold text-lg">Address:</p>
                    </div>
                    <p className="mb-6 text-neutral-400 sm:text-lg text-sm">{CONTACT.address}</p>

                    <div className="mb-4 flex items-center space-x-2">
                        <FaPhoneAlt className="text-lg" />
                        <p className="font-semibold text-lg">Phone:</p>
                    </div>
                    <p className="mb-6 text-neutral-400 sm:text-lg text-sm">{CONTACT.phoneNo}</p>

                    <div className="mb-4 flex items-center space-x-2">
                        <MdOutlineEmail className="text-lg" />
                        <p className="font-semibold text-lg">Email:</p>
                    </div>
                    <p className="text-neutral-400 sm:text-lg text-sm">{CONTACT.email}</p>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.form
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 3, ease: "linear" }}
                    onSubmit={onSubmit}
                    action='https://api.web3forms.com/submit'
                    method='POST'
                    className="w-full lg:w-2/3 bg-neutral-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-blur-xl transition-all duration-300 hover:ring-4 hover:ring-blue-500 hover:shadow-blue-500/40"
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-neutral-300 mb-2" >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full rounded-lg px-4 py-3 text-sm bg-neutral-800 bg-opacity-60 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-neutral-300 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full rounded-lg px-4 py-3 text-sm bg-neutral-800 bg-opacity-60 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-neutral-300 mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            required
                            className="w-full rounded-lg px-4 py-3 text-sm bg-neutral-800 bg-opacity-60 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-blue-500 bg-opacity-90 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>

        </div>
    );
}

export default Contact;
