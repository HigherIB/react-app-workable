import React, { FormEvent,useRef } from "react"

const Form = () => {
    const nameRef = useRef(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (nameRef !== null)
        console.log('nameRef.current.value');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input ref={nameRef} id="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Name</label>
                <input id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}


export default Form