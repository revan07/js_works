let store ={
    Model: 554466,
    name: "motherboard",
    price: "500 usd",
}

let Id_Item = store ["Model"];
let namme_item = store ["name"];
let shop = store ["price"];

buy =
    `manufacture model <b>${Id_Item}</b><br>
    product name: <b>${namme_item}</b><br>
    cost this product <b>${shop}<br></b>`;

document.write (buy)