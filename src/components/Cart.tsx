interface Props {
    cartItems: string[];
    onClick: () => void;
}


const Cart = ({ cartItems, onClick} : Props) => {
    return <>
        <div>Cart</div>
        {cartItems.map((item) => <li>{item}</li>)}
        <button type="button" onClick={onClick}>Empty Cart</button>
    </>
}

export default Cart