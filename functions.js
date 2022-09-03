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

renderContent(menu);

allBtn.addEventListener("click", function () {
  renderContent(menu);
});

breakfastBtn.addEventListener("click", function () {
  renderContent(filterArray("breakfast"));
});

lunchBtn.addEventListener("click", function () {
  renderContent(filterArray("lunch"));
});

shakeBtn.addEventListener("click", function () {
  renderContent(filterArray("shakes"));
});

function filterArray(filterCategory) {
  const newArr = menu.filter(function (item) {
    if (item.category === filterCategory) {
      return true;
    } else {
      return false;
    }
  });

  return newArr;
}

function renderContent(items) {
  mainContainer.innerHTML = "";

  items.forEach((item) => {
    const article = window.document.createElement("article");
    const img = window.document.createElement("img");
    const heading = window.document.createElement("h4");
    const price = window.document.createElement("h4");
    const description = window.document.createElement("p");
    const header = window.document.createElement("header");
    const div = window.document.createElement("div");

    // structure
    article.appendChild(img);
    article.appendChild(div);

    div.appendChild(header);
    div.appendChild(description);

    header.appendChild(heading);
    header.appendChild(price);

    // class
    article.classList.add("menu-item");

    img.classList.add("photo");

    div.classList.add("item-info");

    heading.classList.add("heading");
    price.classList.add("price");

    description.classList.add("item-text");

    // values
    img.src = item.img;
    heading.textContent = item.title;
    price.textContent = `$${item.price}`;
    description.textContent = item.desc;
    mainContainer.append(article);
  });
}
