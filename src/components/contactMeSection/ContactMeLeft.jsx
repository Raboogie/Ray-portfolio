import React from 'react';
import ContactText from "./ContactText.jsx";
import ContactForm from "./ContactForm.jsx"

const ContactMeLeft = () => {
    return (
        <div className="flex flex-col gap-8 w-full">
            <ContactText/>
            <ContactForm/>
        </div>
    )
}
export default ContactMeLeft;