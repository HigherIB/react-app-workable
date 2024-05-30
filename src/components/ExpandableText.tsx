interface Props {
    children: string;
    onClick: () => void;
    charCount: number;
}

const ExpandableText = ({ children, onClick, charCount} : Props) => {
    return <div>
        {children.slice(0, charCount)}
        <button type="button" onClick={onClick}>{}</button>
    </div>
}

export default ExpandableText