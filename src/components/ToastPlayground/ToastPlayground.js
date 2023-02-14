import React, { useState } from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [activeVariant, setActiveVariant] = useState("notice");
    const [message, setMessage] = useState("");
    const [toastVisible, setToastVisible] = useState(false);

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            {toastVisible && <Toast
                variant={activeVariant}
                handleDismiss={() => {
                    setToastVisible(false);
                    setMessage('');
                }}
            >
                {message}
            </Toast>}

            <div className={styles.controlsWrapper}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: "baseline" }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id="message"
                            className={styles.messageInput}
                            value={message}
                            onChange={(evt) => {
                                setMessage(evt.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        {VARIANT_OPTIONS.map((variant) => (
                            <label htmlFor={`variant-${variant}`} key={variant}>
                                <input
                                    id={`variant-${variant}`}
                                    type="radio"
                                    name="variant"
                                    value={variant}
                                    onChange={(evt) => {
                                        setActiveVariant(evt.target.value);
                                    }}
                                    checked={activeVariant === variant}
                                />
                                {variant}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        <Button
                            onClick={() => {
                                setToastVisible(true);
                            }}
                        >
                            Pop Toast!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToastPlayground;
