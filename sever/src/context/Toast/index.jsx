import { createContext, useContext, useState } from "react";

const ToastContext = createContext({
    toasts: [],
    addToast: (message, type) => {},
    removeToast: (id) => {}
});

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);
     const removeToast = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add("opacity-0", "transition", "duration-500");
            setTimeout(() => {
                setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
            }, 500);
        } else {
            setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
        }
    }
    const addToast = (message, type) => {
        const id = Date.now();
        const newToast = {id, message, type};
        setToasts([...toasts , newToast]);
        setTimeout(() => removeToast(id), 3000);
    }


    
    return <ToastContext.Provider
    value={{ toasts, addToast, removeToast }}
    >
        {children}
    </ToastContext.Provider>
}
const useToast = () => useContext(ToastContext);

export default ToastProvider;
export { useToast };