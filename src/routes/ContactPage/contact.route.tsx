import { useState } from 'react';
import './contact.style.sass';

function ContactPage() {
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleAnimation = (): void => {
        setSubmitClicked(true);
        setTimeout(() => setSubmitClicked(false), 750);
    }

    const handleSubmit = (): void => {
        handleAnimation();
        // send to mail
    };

    return (
        <div className="contact">
            <div className='contact-header'>
                <h1>
                    Contact me
                </h1>
            </div>
            <form
                className='contact-form'
                onSubmit={handleSubmit}
                method="POST"
            >
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="input"
                        required
                    />
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input"
                        required
                    />
                </div>
                <div className="input-container">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="input"
                        required
                    />
                </div>
                <div className="input-container">
                    <button
                        className={"bubbly-button " + (submitClicked ? 'animate' : '')}
                        type="submit"
                        onClick={handleAnimation}
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage