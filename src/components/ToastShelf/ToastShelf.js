import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
    const { toasts, removeToast } = useContext(ToastContext);
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
