
console.log("Welcome to Build House Depot!");

const productLinks = document.querySelectorAll(
    ".card-content a"
);

productLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Customer clicked an inquiry link.");
    });
});
