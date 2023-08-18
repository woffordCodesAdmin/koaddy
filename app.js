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
  tue: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/367701221_727130126091943_494726143820498721_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=01IJVLmmX0YAX-HmmBV&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAZVhtl2gzrwEidT5XKYwtA_9Mj3IMau2amPt_aBmtW-w&oe=64E42AF9",
  wed: "https://scontent-dfw5-2.cdninstagram.com/v/t39.30808-6/366085997_18053429923458518_5521800362407412046_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e15_s320x320&_nc_ht=scontent-dfw5-2.cdninstagram.com&_nc_cat=102&_nc_ohc=2skDlevyp8wAX8DZ6qk&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfBRqfpRIwMQ4wShlUu1NyIwsYi7OaARct7Tf8eWzNtgrA&oe=64E370BC&_nc_sid=8b3546",
  thurs:
    "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/358609658_705967164874906_969042619653753054_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=yvG8qwDPBQ4AX-hz7mM&_nc_oc=AQnj_3LMF37v3cyWYIgqYTpAK2iefZdL5itWRNkizPS6Y_XC2S8uVNTDW1WEtC4kKi7R4AghQPKojWrAdtddENqK&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDGacYNt8Bae1yIc5LDUD4gv7Bwnm3b15Q2pY5p5zdXkg&oe=64E4AE6B",
  fri: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/365261520_721261940012095_3863437948965958703_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ei8VTc2gIAkAX8O2ZIS&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDQ_T2Iellesh1ROImfoOtM3Nn5s6NpOTPBVotP--E6ew&oe=64E3DD86",
  sat: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/361375283_707887951349494_1491153283828766642_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=3_p-vXAHMyMAX-afw-A&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCV9WGWu8LD3j50pK_zDbnPZw_zlIqnIu5UgnfCP60UpA&oe=64E325C8",
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