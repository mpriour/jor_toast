import React, { useContext, useEffect } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
    const { toasts, removeToast, flushToasts } = useContext(ToastContext);
    useEffect(() => {
        function handleEscKey(evt) {
            if (evt.code === "Escape") {
                flushToasts();
            }
        }
        window.addEventListener("keydown", handleEscKey);
        return () => {
            window.removeEventListener("keydown", handleEscKey);
        };
    }, [flushToasts]);
    return (
        <ol className={styles.wrapper}>
            {toasts.map(({ id, variant, message }, index) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast variant={variant} handleDismiss={() => removeToast(index)}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
