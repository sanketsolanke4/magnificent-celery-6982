let data = [{
    "id": 1,
    "image": "https://static.thcdn.com/images/small/webp//productimg/original/11395385-8954892768758167.jpg",
    "name": "SkinCeuticals Hyaluronic Acid Intensifier (1 fl. oz.)",
    "price": 106,
}, {
    "id": 2,
    "image": "https://static.thcdn.com/images/small/webp//productimg/original/13997567-3155001922415118.jpg",
    "name": "SkinCeuticals Hydrating Vitamin C & Hyaluronic Acid Serum Kit (Worth $255.00)",
    "price": 229,
}, {
    "id": 3,
    "image": "https://static.thcdn.com/images/small/webp//productimg/original/13997566-1855001922340772.jpg",
    "name": "Dermstore Exclusive Top Sellers Vault Kit (Worth $516.00)",
    "price": 436,
}, {
    "id": 4,
    "image": "https://static.thcdn.com/images/small/webp//productimg/original/13009826-4314903899613188.jpg",
    "name": "Anti-Aging Plumping Hyaluronic Acid & Vitamin C Set (Worth $275.00)",
    "price": 236,
}]
let container = document.querySelector(".p-slider")

function appendData(data) {
    console.log(data)

    data.forEach((el) => {
        let div = document.createElement("div")
        div.setAttribute("class", "imagebox")
        let image = document.createElement("img")
        image.src = el.image
        let name = document.createElement("h3")
        name.innerText = el.name;
        let price = document.createElement("p")
        price.innerText = el.price
        let btn = document.createElement("button")
        btn.innerText = "ADD TO CART"
        btn.addEventListener("click", function () {
            AddTocard(el)
        })
        div.append(image, name, price, btn)
        container.append(div)

    })
};
appendData(data)




// login js code 
var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
}
btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
}
btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
}
btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
}
btn5.onclick = function () {
    slide.style.transform = "translateX(-400%)";
}
let DataArr = []
const AddTocard = (el) => {
    console.log(el)
    DataArr.push(el)
    localStorage.setItem("Card_data", JSON.stringify(DataArr))
}