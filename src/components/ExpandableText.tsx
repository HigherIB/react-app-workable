interface Props {
    children: string;
    onClick: () => void;
    maxChar?: number;
}

const ExpandableText = ({ children, onClick, maxChar = 10} : Props) => {
        if (children.length <= maxChar) return <p>{children}</p>;
         const text = children.substring(0, maxChar);
         return <p>{text}...</p>
}

export default ExpandableText