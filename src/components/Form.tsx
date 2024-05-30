import React from "react"

const Form = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" type="text" className="form-control" />
            </div>
        </form>
    )
}

{/* <div className="mb-3">
<lable htmlFor="name" className="form-lable"></lable>
<input id="name" type="text" className="form-control" />
</div> */}

export default Form