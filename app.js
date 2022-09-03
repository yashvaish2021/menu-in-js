const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const mainContainer = window.document.querySelector(".section-center");

const allBtn = window.document.querySelector('[data-id= "all"]');

const breakfastBtn = window.document.querySelector('[data-id= "breakfast"]');

const lunchBtn = window.document.querySelector('[data-id= "lunch"]');

const shakeBtn = window.document.querySelector('[data-id= "shakes"]');

const itemPhoto = window.document.querySelector(".photo");

const itemPrice = window.document.querySelector(".price");

const itemTextMenu = window.document.querySelector(".item-text");

const heading = window.document.querySelector(".heading");

menu.forEach(function (item) {
  const article = window.document.createElement("article");
  const img = window.document.createElement("img");
  const div = window.document.createElement("div");
  const price = window.document.createElement("h4");
  const heading = window.document.createElement("h4");
  const description = window.document.createElement("item-text");
  const header = window.document.createElement("header");

  //appending them in html
  article.appendChild(div);
  article.appendChild(img);

  header.appendChild(price);
  header.appendChild(heading);

  div.appendChild(description);
  div.appendChild(header);

  mainContainer.appendChild(article);

  //add classes
  article.classList.add("menu-item");
  img.classList.add("photo");
  div.classList.add("item-info");
  price.classList.add("price");
  heading.classList.add("heading");
  description.classList.add("item-text");

  //assining values
  img.src = item.img;
  price.textContent = item.price;
  heading.textContent = item.title;
  description.textContent = item.desc;
});

allBtn.addEventListener("click", function () {
  menu.forEach(function (item) {
    const article = window.document.createElement("article");
    const img = window.document.createElement("img");
    const div = window.document.createElement("div");
    const price = window.document.createElement("h4");
    const heading = window.document.createElement("h4");
    const description = window.document.createElement("item-text");
    const header = window.document.createElement("header");

    //appending them in html
    article.appendChild(div);
    article.appendChild(img);

    header.appendChild(price);
    header.appendChild(heading);

    div.appendChild(description);
    div.appendChild(header);

    mainContainer.appendChild(article);

    //add classes
    article.classList.add("menu-item");
    img.classList.add("photo");
    div.classList.add("item-info");
    price.classList.add("price");
    heading.classList.add("heading");
    description.classList.add("item-text");

    //assining values
    img.src = item.img;
    price.textContent = item.price;
    heading.textContent = item.title;
    description.textContent = item.desc;
  });
});

breakfastBtn.addEventListener("click", function () {
  mainContainer.innerHTML = "";
  const breakfastArray = menu.filter(function (item) {
    if (item.category === "breakfast") {
      return true;
    } else {
      return false;
    }
  });
  console.log(breakfastArray);
  breakfastArray.forEach(function (breakfastItem) {
    //creating elements
    const article = window.document.createElement("article");
    const img = window.document.createElement("img");
    const div = window.document.createElement("div");
    const price = window.document.createElement("h4");
    const heading = window.document.createElement("h4");
    const description = window.document.createElement("item-text");
    const header = window.document.createElement("header");

    //appending them in html
    article.appendChild(div);
    article.appendChild(img);

    header.appendChild(price);
    header.appendChild(heading);

    div.appendChild(description);
    div.appendChild(header);

    mainContainer.appendChild(article);

    //add classes
    article.classList.add("menu-item");
    img.classList.add("photo");
    div.classList.add("item-info");
    price.classList.add("price");
    heading.classList.add("heading");
    description.classList.add("item-text");

    //assining values
    img.src = breakfastItem.img;
    price.textContent = breakfastItem.price;
    heading.textContent = breakfastItem.title;
    description.textContent = breakfastItem.desc;
  });
});

lunchBtn.addEventListener("click", function () {
  mainContainer.innerHTML = "";
  const lunchArray = menu.filter(function (item) {
    if (item.category === "lunch") {
      return true;
    } else {
      return false;
    }
  });
  console.log(lunchArray);
  lunchArray.forEach(function (lunchItem) {
    //creating elements
    const article = window.document.createElement("article");
    const img = window.document.createElement("img");
    const div = window.document.createElement("div");
    const price = window.document.createElement("h4");
    const heading = window.document.createElement("h4");
    const description = window.document.createElement("item-text");
    const header = window.document.createElement("header");

    //appending them in html
    article.appendChild(div);
    article.appendChild(img);

    header.appendChild(price);
    header.appendChild(heading);

    div.appendChild(description);
    div.appendChild(header);

    mainContainer.appendChild(article);

    //add classes
    article.classList.add("menu-item");
    img.classList.add("photo");
    div.classList.add("item-info");
    price.classList.add("price");
    heading.classList.add("heading");
    description.classList.add("item-text");

    //assining values
    img.src = lunchItem.img;
    price.textContent = lunchItem.price;
    heading.textContent = lunchItem.title;
    description.textContent = lunchItem.desc;
  });
});

shakeBtn.addEventListener("click", function () {
  mainContainer.innerHTML = "";
  const shakesArray = menu.filter(function (item) {
    if (item.category === "shakes") {
      return true;
    } else {
      return false;
    }
  });
  console.log(shakesArray);
  shakesArray.forEach(function (shakeItem) {
    //creating elements
    const article = window.document.createElement("article");
    const img = window.document.createElement("img");
    const div = window.document.createElement("div");
    const price = window.document.createElement("h4");
    const heading = window.document.createElement("h4");
    const description = window.document.createElement("item-text");
    const header = window.document.createElement("header");

    //appending them in html
    article.appendChild(div);
    article.appendChild(img);

    header.appendChild(price);
    header.appendChild(heading);

    div.appendChild(description);
    div.appendChild(header);

    mainContainer.appendChild(article);

    //add classes
    article.classList.add("menu-item");
    img.classList.add("photo");
    div.classList.add("item-info");
    price.classList.add("price");
    heading.classList.add("heading");
    description.classList.add("item-text");

    //assining values
    img.src = shakeItem.img;
    price.textContent = shakeItem.price;
    heading.textContent = shakeItem.title;
    description.textContent = shakeItem.desc;
  });
});
