import React from 'react';
import ContactInfo from "./ContactInfo.jsx";

const ContactMeRight = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <img src="../../../public/images/email-image.png" alt="Picture of an Envolope" className="m-w-[300px]"/>
            <ContactInfo/>
        </div>
    );
};

export default ContactMeRight;