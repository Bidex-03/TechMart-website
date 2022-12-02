// Toggle menu

var sideLink = document.getElementById('side-link');

function showMenu() {
    sideLink.style.right = "0";
}

function hideMenu() {
    sideLink.style.right = "-200px";
}

///////////////////////
// Quick auctions
const containerAuctions = document.querySelector("#auctions");
const containerAuctionImages = document.querySelector(".auction-images");

let auctions = [
    {
        id: 1,
        name: "6 months old camo prints hi...",
        image: "./Asset/auction-bag.jpg",
        price: "₦4,500",
    },
    {
        id: 2,
        name: "4 months old IPASON latitu...",
        image: "./Asset/auction-laptop.jpg",
        price: "₦95,000",
    },
    {
        id: 3,
        name: "A95 smartphone Helio WPX...",
        image: "./Asset/auction-iPhone.jpg",
        price: "₦68,700",
    },
    {
        id: 4,
        name: "Feiyutech SCORP-C camhol...",
        image: "./Asset/auction-camera.jpg",
        price: "₦68,700",
    }
]

const displayAuction = (auctions) => {
    containerAuctionImages.innerHTML = "";

    auctions.forEach(function (auction) {
        const auctionImage = document.createElement("div");
        auctionImage.classList.add("auction-image");
        auctionImage.innerHTML = `
            <a href="#"><img src="${auction.image}" alt="${auction.name}">
            <div class="auction-info">
                <h3>${auction.name}</h3>
                <p>${auction.price}</p>
            </div></a>
        `;
        containerAuctionImages.appendChild(auctionImage);
    });
}
displayAuction(auctions);


//////////////////////////
// Categories
const containerCategories = document.querySelector("#categories");
const containerCategoryImages = document.querySelector(".category-images");

let categories = [
    {
        name: "Fashion Accessories",
        image: "./Asset/categories-fashion.jpg",
    },
    {
        name: "Computer Systems",
        image: "./Asset/categories-computer.jpg",
    },
    {
        name: "Electronics",
        image: "./Asset/categories-electronics.jpg",
    },
    {
        name: "Photography",
        image: "./Asset/categories-photography.png",
    },
    {
        name: "Furnitures",
        image: "./Asset/categories-furniture.jpg",
    },
    {
        name: "Vehicles and Accessories",
        image: "./Asset/categories-vehicles.jpg",
    },
    {
        name: "Toys and Hobbies",
        image: "./Asset/categories-toys.jpg",
    },
    {
        name: "Games and Accessories",
        image: "./Asset/categories-games.jpg",
    },
    {
        name: "Tools and Accessories",
        image: "./Asset/categories-tools.jpg",
    },
    {
        name: "Lighting and Accessories",
        image: "./Asset/categories-lighting.jpg",
    },
    {
        name: "Tech Gadgets",
        image: "./Asset/categories-tech.jpg",
    },
    {
        name: "Mobile Phones",
        image: "./Asset/categories-mobile.jpg",
    }
]

const displayCategories = (categories) => {
    containerCategoryImages.innerHTML = "";

    categories.forEach(function (category) {
        const categoryImage = document.createElement("div");
        categoryImage.classList.add("category-image");
        categoryImage.innerHTML = `
            <a href="#"><img src="${category.image}" alt="${category.name}">
            <div class="category-info">
                <p>${category.name}</p>
            </div></a>
        `;
        containerCategoryImages.appendChild(categoryImage);
    });
    
}
displayCategories(categories);


/////////////////////////////////
// SEE ALSO
const containerSeeAlso = document.querySelector("#see-also");
const containerSeeAlsoImages = document.querySelector(".see-also-images");

let seeAlsos = [
    {
        id: 1,
        name: "Ultralight-weight-waterproo..",
        image: "./Asset/waterproof-bag.jpg",
        oldPrice: "₦4,500",
        newPrice: "₦3,900",
    },
    {
        id: 2,
        name: "60mm-Scope-magnifier-for...",
        image: "./Asset/scope-magnifier.jpg",
        oldPrice: "₦5,000",
        newPrice: "₦3,800",
    },
    {
        id: 3,
        name: "Brown leather shoe for men...",
        image: "./Asset/brown-shoe.jpg",
        oldPrice: "₦5,500",
        newPrice: "₦3,900",
    },
    {
        id: 4,
        name: "2022 Cosmetic case for wo...",
        image: "./Asset/cosmetic-case.jpg",
        oldPrice: "₦6,500",
        newPrice: "₦4,900",
    }
]

const displaySeeAlso = (seeAlsos) => {
    containerSeeAlsoImages.innerHTML = "";

    seeAlsos.forEach(function (seeAlso) {
        const seeAlsoImage = document.createElement("div");
        seeAlsoImage.classList.add("see-also-image");
        seeAlsoImage.innerHTML = `
            <a href="#"><img src="${seeAlso.image}" alt="${seeAlso.name}">
            <div class="see-also-info">
                <h3>${seeAlso.name}</h3>
                <div class="see-also-paragraphs">
                    <p class="old-price"><del>${seeAlso.oldPrice}</del></p>
                    <p class="new-price">${seeAlso.newPrice}</p>
                </div>
            </div></a>
        `;
        containerSeeAlsoImages.appendChild(seeAlsoImage);
    });
}
displaySeeAlso(seeAlsos);