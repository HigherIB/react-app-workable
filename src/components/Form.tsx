import React, { FormEvent,useRef, useState } from "react"

const Form = () => {
const [person, setPerson] = useState({
    name: '',
    age: 0,
})

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(person);
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input onChange={(e) => setPerson({ ...person, name: e.target.value})} id="name" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Name</label>
                <input onChange={(e) => setPerson({ ...person, age: +e.target.value})} id="age" type="number" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}


export default Form