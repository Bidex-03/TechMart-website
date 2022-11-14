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
        name: "6 months old camo prints hi...",
        image: "./Asset/auction-bag.jpg",
        price: "₦4500",
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