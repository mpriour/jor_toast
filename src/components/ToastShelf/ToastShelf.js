import React, { useContext } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf({autoDismiss, dismissTime}) {
    const { toasts, flushToasts } = useContext(ToastContext);
    useEscapeKey(flushToasts);
    return (
        <ol className={styles.wrapper} role="region" aria-live="assertive" aria-label="Notifications">
            {toasts.map(({ id, variant, message }) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast id={id} variant={variant} autoDismiss={autoDismiss} dismissTime={dismissTime}>
                        {message}
                    </Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
