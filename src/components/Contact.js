import "./Contact.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import validator from "email-validator";
import { useInput } from "../hooks/use-input";

const Contact = ({ darkMode, lang }) => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [enterEmailError, setEnterEmailError] = useState(false);
    const [sendingEmail, setSendingEmail] = useState(false);

    // CONTACT FORM VALIDATION
    const validateEmail = (value) => {
        return validator.validate(value);
    };
    const {
        value: email,
        isValid: isEmailValid,
        hasError: hasEmailError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlutHandler,
        reset: resetEmail,
        isTouched,
    } = useInput(validateEmail, setEnterEmailError);

    useEffect(() => {
        if (hasEmailError) {
            setEnterEmailError(false);
        }
    }, [hasEmailError]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnterEmailError(false);
        setErrorMessage("");
        setSuccessMessage("");

        if (!isEmailValid && !isTouched) {
            setEnterEmailError(true);
        }
        if (!isEmailValid) {
            setSendingEmail(false);
            return;
        }
        setSendingEmail(true);

        const payload = {
            name,
            email,
            message,
        };

        try {
            const response = await axios.post(
                "https://starlit-pasca-7c111b.netlify.app/.netlify/functions/api/send-email",
                payload
            );
            if (response.status === 200) {
                setSendingEmail(false);
                setSuccessMessage("Message sent successfully");
                resetEmail();
                setName("");
                setMessage("");
            }
        } catch (error) {
            setErrorMessage("Something went wrong");
            setSendingEmail(false);
            setSuccessMessage("");
            console.error(error);
        }
    };
    return (
        <div className="container py-5">
            <div
                className="card bg-light mx-auto custom-card dark:!bg-slate-900 dark:text-white dark:!shadow-md"
                style={{ maxWidth: "800px", border: "none" }}
                id="contact-form"
            >
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">
                        {lang ? <>Sazinies ar mani</> : <>CONTACT ME</>}
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 ">
                            <input
                                type="text"
                                className={`form-control custom-input dark:!bg-slate-905 dark:!text-white ${
                                    darkMode ? "input_dark" : ""
                                }`}
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder={lang ? "Vārds" : "Name"}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                className={`form-control custom-input dark:!bg-slate-905 dark:!text-white ${
                                    darkMode ? "input_dark" : ""
                                } ${
                                    hasEmailError || enterEmailError
                                        ? "email-error"
                                        : ""
                                }`}
                                id="email"
                                value={email}
                                onChange={emailChangeHandler}
                                onBlur={emailBlutHandler}
                                placeholder={lang ? "E-pasts" : "Email"}
                            />
                            {!hasEmailError ? (
                                ""
                            ) : (
                                <span
                                    className="invalid-email"
                                    style={{ color: "red" }}
                                >
                                    Invalid email address
                                </span>
                            )}
                            {!enterEmailError ? (
                                ""
                            ) : (
                                <span
                                    className="invalid-email"
                                    style={{ color: "red" }}
                                >
                                    Invalid email address
                                </span>
                            )}
                        </div>
                        <div className="mb-4">
                            <textarea
                                className={`form-control custom-input dark:!bg-slate-905 dark:!text-white ${
                                    darkMode ? "input_dark" : ""
                                } `}
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={lang ? "Ziņa" : "Message"}
                                rows={4}
                            ></textarea>
                            <span className="error-message">
                                {errorMessage}
                            </span>
                            <span className="success-message">
                                {successMessage}
                            </span>
                            {sendingEmail ? "Sending..." : ""}
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className={`btn btn-block dark:!bg-slate-930 dark:hover:!bg-slate-910 ${
                                    darkMode ? "input_dark" : ""
                                }`}
                                style={{ width: "50%", margin: "0 auto" }}
                            >
                                {lang ? <>Sūtīt</> : <>Send</>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
