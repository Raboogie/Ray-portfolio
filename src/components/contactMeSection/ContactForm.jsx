import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formStatus, setFormStatus] = useState({ message: '', type: '' });
    const myFormRef = useRef();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setFormStatus({ message: '', type: '' });

        emailjs
            .sendForm('service_yn4mrjj', 'template_9mocu3z', myFormRef.current, {
                publicKey: 'lmexi5prPdvJBSrD7',
            })
            .then(
                () => {
                    setFormStatus({
                        message: 'Message Sent Successfully',
                        type: 'success',
                    });
                    setName('');
                    setEmail('');
                    setMessage('');
                    console.log('SUCCESS!');
                },
                (error) => {
                    setFormStatus({
                        message: `Message failed to send: ${error.text}`,
                        type: 'error',
                    });
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            {formStatus.message && (
                <p
                    className={`mb-4 ${
                        formStatus.type === 'success' ? 'text-cyan-400' : 'text-red-400'
                    }`}
                >
                    {formStatus.message}
                </p>
            )}
            <form className="flex flex-col gap-4" ref={myFormRef} onSubmit={sendEmail}>
                <input
                    name={"from_name"}
                    type="text"
                    placeholder="Your Name"
                    required={true}
                    className="h-12 rounded-lg bg-neutral-500 px-2"
                    value={name}
                    onChange={handleName}
                />
                <input
                    name={"from_email"}
                    type="email"
                    placeholder="Your Email"
                    required={true}
                    className="h-12 rounded-lg bg-neutral-500 px-2"
                    value={email}
                    onChange={handleEmail}
                />
                <textarea
                    name={"message"}
                    placeholder="Message"
                    rows={9}
                    cols={50}
                    required={true}
                    className="rounded-lg bg-neutral-500 p-2"
                    value={message}
                    onChange={handleMessage}
                />
                <button type="submit" className="w-full rounded-lg border border-cyan-400 h-12 font-bold text-xl hover:bg-cyan-800 bg-cyan-500 transition-all duration-500">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;