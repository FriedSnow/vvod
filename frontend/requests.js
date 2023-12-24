export async function addItem(item){
    await fetch('http://localhost:8080/item', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: item.name,
            title: item.title,
            price: item.price,
            img: item.img
        })
    });
}