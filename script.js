// Toggle menu

var sideLink = document.getElementById('side-link');

function showMenu() {
    sideLink.style.right = "0";
}

function hideMenu() {
    sideLink.style.right = "-200px";
}

const containerAuctions = document.querySelector("#auctions");
const containerAuctionImages = document.querySelector(".auction-images");

let auctions = [
    {
        id: 1,
        name: "Apple iPhone 12 Pro Max 256GB",
        image: "./Asset/Phone_D.jpg",
        price: "₦1,000,000",
    },
    {
        id: 2,
        name: "Powerbank_D",
        image: "./Asset/Powerbank_D.jpg",
        price: "₦30,000",
    },
    {
        id: 3,
        name: "Rice_1",
        image: "./Asset/Rice_1.jpg",
        price: "₦28,000",
    },
    {
        id: 4,
        name: "Shirt_1",
        image: "./Asset/Shirt_1.jpg",
        price: "₦5,000",
    }
]

const displayAuction = (auctions) => {
    containerAuctionImages.innerHTML = "";

    auctions.forEach(function (auction) {
        const auctionImage = document.createElement("div");
        auctionImage.classList.add("auction-image");
        auctionImage.innerHTML = `
            <img src="${auction.image}" alt="${auction.image}">
            <div class="auction-info">
                <h3>${auction.name}</h3>
                <p>${auction.price}</p>
            </div>
        `;
        containerAuctionImages.appendChild(auctionImage);
    });
}
displayAuction(auctions);