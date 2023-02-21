import React, { useContext, useEffect } from "react";
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from "react-feather";

import { ToastContext } from "../ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({ id, variant, autoDismiss, dismissTime = 10, children }) {
    const { removeToast } = useContext(ToastContext);
    useEffect(() => {
        if (autoDismiss) {
            const handle = window.setTimeout(() => {
                removeToast(id);
            }, dismissTime * 1000);
            return () => window.clearTimeout(handle);
        }
    }, [id, autoDismiss, dismissTime, removeToast]);

    const MessageIcon = ICONS_BY_VARIANT[variant];
    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <MessageIcon size={24} />
            </div>
            <p className={styles.content}>
                <VisuallyHidden>{variant} - </VisuallyHidden>
                {children}
            </p>
            <button
                className={styles.closeButton}
                onClick={() => removeToast(id)}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X size={24} />
            </button>
        </div>
    );
}

export default Toast;
