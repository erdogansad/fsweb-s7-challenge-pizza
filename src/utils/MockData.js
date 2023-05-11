import { ramenImg, pizzaImg, burgerImg, friesImg, fastFoodImg, softDrinksImg, foodOne, foodTwo, foodThree } from "./Images";


const categories = [
    { img: ramenImg, name: "YENİ! Ramen", selected: false},
    { img: pizzaImg, name: "Pizza", selected: true},
    { img: burgerImg, name: "Burger", selected: false},
    { img: friesImg, name: "Kızartma", selected: false},
    { img: fastFoodImg, name: "Fast Food", selected: false},
    { img: softDrinksImg, name: "Gazlı İçecek", selected: false}
];
const foods = [
    { name: "Terminal Pizza", img: foodOne, review: {score: 4.9, count: 200}, price: 60 },
    { name: "Position Absolute Acı Pizza", img: foodTwo, review: {score: 4.9, count: 928}, price: 85 },
    { name: "useEffect Tavuklu Burger", img: foodThree, review: {score: 4.9, count: 462}, price: 75 }
];

const pizzaSize = ["Küçük", "Orta", "Büyük"];
const pizzaDough = ["Normal", "İnce", "Süpper İnce"];

const pizzaExtras = [
    { id: 1, name: "Pepperoni" },
    { id: 2, name: "Domates" },
    { id: 3, name: "Biber" },
    { id: 4, name: "Sosis" },
    { id: 5, name: "Mısır" },
    { id: 6, name: "Sucuk" },
    { id: 7, name: "Kanada Jambonu" },
    { id: 8, name: "Ananas" },
    { id: 9, name: "Tavuk Izgara" },
    { id: 10, name: "Jalepeno" },
    { id: 11, name: "Kabak" },
    { id: 12, name: "Soğan" },
    { id: 13, name: "Sarımsak" }
];
const rowsCount = Math.ceil(pizzaExtras.length / 3);

export {
    categories,
    foods,
    pizzaExtras,
    rowsCount,
    pizzaSize,
    pizzaDough
}