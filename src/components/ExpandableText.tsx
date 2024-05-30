import { useState } from "react";

interface Props {
    children: string;
    onClick: () => void;
    maxChar?: number;
}

const ExpandableText = ({ children, onClick, maxChar = 100} : Props) => {
    const [isExpandable, setIsExpandable] = useState(false)
        if (children.length <= maxChar) return <p>{children}</p>;
         const text = children.substring(0, maxChar);
         return <p>{text}... <button> {isExpandable ? 'Less' : 'More'} </button> </p>
}

export default ExpandableText