import { useState } from "react";

interface Props {
    children: string;
    maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 100} : Props) => {
    const [isExpandable, setIsExpandable] = useState(false)
        if (children.length <= maxChar) return <p>{children}</p>;
         const text = isExpandable ? children : children.substring(0, maxChar);
         return <p>{text}... <button type="button" onClick={() => setIsExpandable(!isExpandable)}> {isExpandable ? 'Less' : 'More'} </button> </p>
}

export default ExpandableText