import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
}
const Alert = ({ children }: Props) => {
    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div className="alert alert-primary alert-dismissible fade show">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertVisibility(false)}></button>
        </div>
    )
}

export default Alert