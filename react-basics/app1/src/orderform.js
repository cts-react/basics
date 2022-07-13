import { useState } from "react";
import './orderform.css';

function OrderForm(props) {
    const [order, setOrder] = useState({
        item: 'Laptop',
        price: 30,
        tax: 10
    });
    function updateValue(event) {
        console.log(event.target.value);
        setOrder({ ...order, [event.target.name]: event.target.value });
    }
    function calculateTotal() {
        if (order.tax < 0) {
            return "error ";
        }
        return parseInt(order.price) * (1 + (order.tax / 100));
    }
    return (//return JSX template
        <div>
            <h1>order form</h1>
            <div class="row">
                <div class="col-25">
                    <label>Item Name</label>
                </div>
                <div class="col-75">
                    <input value={order.item} name='item' onChange={updateValue}></input>
                </div>
            </div>
            <input value={order.price} name='price' onChange={updateValue}></input>
            <input placeholder='tax' min='0' type='range' value={order.tax} onChange={updateValue} name='tax'></input>
            Total: {calculateTotal()}
            <div>
                <h1>{order.item}</h1>
            </div>
        </div>
    )
}

export default OrderForm;