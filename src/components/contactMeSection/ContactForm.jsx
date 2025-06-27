import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    required={true}
                    className="h-12 rounded-lg bg-neutral-500 px-2"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    required={true}
                    className="h-12 rounded-lg bg-neutral-500 px-2"
                />
                <textarea
                    value="text"
                    placeholder="Message"
                    rows={9}
                    cols={50}
                    required={true}
                    className="rounded-lg bg-neutral-500 p-2"
                />
                <button type="submit"></button>
            </form>
        </div>
    );
};

export default ContactForm;