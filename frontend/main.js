import { addItem } from "./requests.js";

(function () {
    class Item {
        name;
        title;
        price;
        img;

        constructor(name, title, price, img) {
            this.name = name;
            this.title = title;
            this.price = price;
            this.img = img;
        }

        setID(id) {
            this.id = id;
        }
    }
    document.addEventListener('DOMContentLoaded', function (e) {
        e.preventDefault();
        let form = document.getElementById('add-element-form');
        form.addEventListener('submit', function () {
            let iName = document.getElementById('Name');
            let iPrice = document.getElementById('Price');
            let ititle = document.getElementById('title');
            let iImg = document.getElementById('Img');

            let item = new Item(iName.value, iPrice.value, ititle.value, iImg.value);

            addItem(item);
        });
    })
})();