function save(event) {
    const payload = {
        item: "laptop"
    }
    console.log(event);
    fetch("http://localhost:3000/orders", {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json'
        }
    });
}

(async function () {//IIFE 
    const response = await fetch("http://localhost:3000/orders");
    console.log(response);
    const orders = await response.json();
    const list = document.getElementById("orderlist");
    console.log(orders);
    orders.forEach(order => {
        const row = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.addEventListener(function () {
            fetch("http://localhost:3000/orders/"+id, {
                method:'delete'
            })
        })
        deleteBtn.textContent = 'delete';
        row.textContent = order.item + ", " + order.price ;
        row.appendChild(deleteBtn);
        list.appendChild(row);
    });
})();