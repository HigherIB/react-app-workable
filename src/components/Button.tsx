import { useState } from "react"

const Button = () => {
    const [alertVisible, setAlertVisibility] = useState(false)
    return (
        <button type="button" className="btn btn-primary" onClick={() => setAlertVisibility(true)}>
            Show More
        </button>
    )
}

export default Button