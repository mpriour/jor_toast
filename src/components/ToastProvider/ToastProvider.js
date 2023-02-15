import React, { createContext, useMemo, useState } from "react";
import { useCallback } from "react";

import Queue from "../../utils/Queue";

export const ToastContext = createContext();

const toastQueue = new Queue();

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState(() => [...toastQueue.items]);

    const addToast = useCallback(function (toastDetails) {
        const newQueue = toastQueue.enqueue({ id: crypto.randomUUID(), ...toastDetails });
        setToasts(newQueue);
    }, []);

    const popToast = useCallback(function () {
        const newQueue = toastQueue.dequeue();
        setToasts(newQueue);
    }, []);

    const removeToast = useCallback(function (index) {
        const newQueue = toastQueue.remove(index);
        setToasts(newQueue);
    }, []);

    const toastsControl = useMemo(
        () => ({
            toasts,
            addToast,
            popToast,
            removeToast,
        }),
        [toasts, addToast, popToast, removeToast]
    );

    return <ToastContext.Provider value={toastsControl}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
