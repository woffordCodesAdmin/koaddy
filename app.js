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

let events = {
  mon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWtdikSUSpBWiCWB8BZc3sTkot4iiIuuBn6ILodFzCS-7xKcHRxAV5V3GvGgmYC2K22M&usqp=CAU",
  tue: "https://scontent-dfw5-2.cdninstagram.com/v/t39.30808-6/366085997_18053429923458518_5521800362407412046_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e15_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=2skDlevyp8wAX8DZ6qk&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfBRqfpRIwMQ4wShlUu1NyIwsYi7OaARct7Tf8eWzNtgrA&oe=64E370BC&_nc_sid=8b3546",
  wed: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/367615768_638764881359750_4657285800975922564_n.jpg?stp=dst-jpg_e15_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=fivEOaHB_pIAX9pwflt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAChfIjZkCe5YMvgF5BQvPzvpv9zHYKoqINn-_pAakB7g&oe=64E44BD3&_nc_sid=8b3546",
  thurs:
    "https://scontent-dfw5-2.cdninstagram.com/v/t39.30808-6/366701695_18381156790016126_8751467393992688647_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=zVay7aMBMTYAX-3dISP&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfB5svNV-RQnPv4oADEkeJv2PdB_0bE6bFGOquzPLeyGpg&oe=64E475C6&_nc_sid=8b3546",
  fri: "https://scontent-dfw5-2.cdninstagram.com/v/t39.30808-6/365321363_18053157283458518_334560719511056496_n.jpg?stp=c216.0.1008.1008a_dst-jpg_e15_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=I0Vz0mzRwooAX-2rOy_&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfCNlAgbn8jdaxJvvn8C_Kvi5_yVlCaJSnaKI0GfkUXFfg&oe=64E4378C&_nc_sid=8b3546",
  sat: "https://scontent-dfw5-2.cdninstagram.com/v/t51.2885-15/365447870_1057467718749319_3027137849482220498_n.jpg?stp=c144.0.1152.1152a_dst-jpg_e35_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=107&_nc_ohc=P6WgBZZr_BIAX-c0d9_&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD2T9Czg8xUUDAp7ZmcqQp8MndaSV_yqGeoHmOvKXjZRQ&oe=64E4A04B&_nc_sid=8b3546",
  sun: "https://scontent-dfw5-2.cdninstagram.com/v/t39.30808-6/367456271_18052810288458518_4767182131529250208_n.jpg?stp=dst-jpg_e15_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=IAZPKSBYZa4AX-YchO2&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfBoQeb4pzcIdAQxDHxMQiZLuJZgxxPfbUYA1vWyuCn0ig&oe=64E2E63B&_nc_sid=8b3546",
};
let shadowScrn = document.querySelector(".hiddenScrn");

const shareToScreen = (information) => {
  shadowScrn.innerHTML = "";

  information.map((item) => {
    let nitem = document.createElement("div");
    nitem.innerHTML = item;
    nitem.setAttribute("class", "showTxt");
    shadowScrn.append(nitem);
  });
};

const tshow = (day) =>{
    let stage = document.querySelector('.screen')
    stage.setAttribute('src',day)
}