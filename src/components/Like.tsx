import { useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface Props {
    onClick: () => void;
}


const Like = ({ onClick } : Props) => {
    const [bookmark, setBookmark] =  useState(true);

    
    const toggle = () => {
        setBookmark(!bookmark);
        onClick()
    }

    if (bookmark) return <BsBookmarkFill size={40} onClick={toggle}/>;
    return <BsBookmark size={40} onClick={toggle}/>;
}

export default Like