import { useToast } from "../context/Toast";

const Toast = () => {
    const { toasts } = useToast()
    
    return (
        <div className="fixed top-5 right-5 space-y-2 z-50">
            {toasts.map(({ id, message, type }) => (
                <div
                    key={id}
                    id={id}
                    className={`border-l-4 p-4  shadow-md`}
                    role="alert"
                >
                    <p className="font-bold">{type.toUpperCase()}</p>
                    <p>{message}</p>
                </div>
            ))}
        </div>
    );
}

export default Toast;