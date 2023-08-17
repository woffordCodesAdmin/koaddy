let menuItems = {
  mainevent: {
    information: [
      "Fish and Chips",
      "Cajun Chickin Pasta",
      "Popcorn Shrimp Platter",
      "Chicken Tenders",
      "Buffalo Mac&Cheese",
      "Knockout Qusadilla",
    ],
    img: "",
  },
  pizza: {
    information: ["Cheese", "Pepperoni", "Supreme", "Meat Lovers", "Veggie"],
    price: "",
    img: "",
  },
  burgers: {
    information: [
      "Hickory Burger",
      "Bacon Ranch Burger",
      "Impossible Burger",
      "Hangover",
      "KO Burger",
      "Uppercut",
    ],
    price: "",
    img: "",
  },
  salads: {
    information: ["Buffalo chicken Salad", "House Salad", "Caesar Salad"],
    price: "",
    img: "",
  },
  sandwiches: {
    information: [
      "Footlong Hotdog",
      "Philly Cheese steak",
      "Buffalo Chicken Sandwich",
      "Twisted Chicken Sandwich",
    ],
    price: "",
    img: "",
  },
  dessert: {
    information: ["Churros", "Funnel Cake Fries"],
    price: "",
    img: "",
  },
  tacos: {
    information: [
      "Pastor",
      "Steak",
      "Grilled Chicken",
      "Fried Fish",
      "Blackened Shrimp",
    ],
    price: "",
    img: "",
  },
  wings: {
    information: [
      "Lemon Pepper",
      "Honey BBQ",
      "Tangy Gold",
      "Buffalo",
      "Cajun Dry Rub",
      "Haymaker Honey",
      "Spicy BBQ",
      "Mango Habanero",
      "Spicy Buffalo",
      "Soy Garlic",
      "Medium Spicy",
      "Spicy Soy Garlic",
      "Spicy Parmesean",
      "Challenger",
    ],
    price: "",
    img: "",
  },
};

let shadowScrn = document.querySelector(".hiddenScrn");

const shareToScreen = (information) => {
 
shadowScrn.innerHTML=""

information.map((item)=>{
    let nitem = document.createElement('div')
    nitem.innerHTML = item
    nitem.setAttribute('class','showTxt')
    shadowScrn.append(
    nitem)
})

  
};
