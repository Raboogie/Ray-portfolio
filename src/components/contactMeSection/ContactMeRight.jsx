import React from 'react';
import ContactInfo from "./ContactInfo.jsx";
import emailImage from '../../images/email-image.png';

const ContactMeRight = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12">
            <img src={emailImage} alt="Picture of an Envolope" className="m-w-[300px]"/>
            <ContactInfo/>
        </div>
    );
};

export default ContactMeRight;