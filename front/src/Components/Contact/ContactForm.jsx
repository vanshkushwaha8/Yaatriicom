// ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser'; // Update import statement

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // EmailJS service configuration
        const serviceId = 'service_336g2gj'; // Replace with your EmailJS service ID
        const templateId = 'template_fnseoop'; // Replace with your EmailJS template ID
        const userId = 'u8VY2xj2dUWzdGN8j'; // Replace with your EmailJS user ID
    
        // Create a new object with dynamic template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Yaatrri.com',
            message: message,
        };
    
        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                console.log('Email sent successfully', response);
                // Clear form fields after successful submission
                setName('');
                setEmail('');
                setMessage('');
                // Show alert message
                alert('Message has been sent');
                // Wait for user's response
                // (You cannot actually wait for the user's response here, as JavaScript is single-threaded and execution will continue immediately after showing the alert)
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };
    

    return (
        
        <div className="contact-formY">
            <h3>Contact Us</h3>
            <form onSubmit={handleSubmit} className='contactFormY'>
                <input 
                    type="text" 
                    placeholder="Your Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    
                />
                <input 
                    type="email" 
                    placeholder="Your Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    
                />
                <textarea
                    cols="30"
                    rows="10"
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}  
                
                />
                <button type="submit">Send Email</button>
            </form>
            <div className="social-media-links">
            <a href="https://www.facebook.com"><img src="https://cdn.pixabay.com/photo/2017/12/06/04/56/facebook-3000954_640.png" height="60px" alt="Facebook" /></a>
                <a href="https://www.twitter.com"><img src="https://cdn.pixabay.com/photo/2017/12/06/04/57/twitter-3000965_640.png" height="50px"alt="Twitter" /></a>
                <a href="https://www.google.com"><img src="https://cdn.pixabay.com/photo/2016/10/23/06/04/google-1762248_640.png" height="50px" alt="Google" /></a>
            </div>
        </div>
    );
}

export default ContactForm;
