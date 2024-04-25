// document.addEventListener("DOMContentLoaded", function() {
//     const modalKitchen = document.getElementById("modal-kitchen");
//     const kitchenLink = document.querySelector(".price__kitchen-title");
//     const modalContentKitchen = document.getElementById("modalContent-kitchen");
//     const closeBtnKitchen = document.querySelector(".price__close-kitchen");

//     kitchenLink.addEventListener("click", function(event) {
//         event.preventDefault();
//         modalKitchen.style.display = "block";
//         modalContentKitchen.src = this.href;
//         document.body.style.overflow = 'hidden'; 
//         modalKitchen.style.overflowY = 'hidden';
//     });

//     closeBtnKitchen.addEventListener("click", function() {
//         modalKitchen.style.display = "none";
//         modalContentKitchen.src = "";
//         document.body.style.overflow = 'auto'; 
//     });

//     const modalFurniture = document.getElementById("modal-furniture");
//     const furnitureLink = document.querySelector(".price__furniture-title");
//     const modalContentFurniture = document.getElementById("modalContent-furniture");
//     const closeBtnFurniture = document.querySelector(".price__close-furniture");

//     furnitureLink.addEventListener("click", function(event) {
//         event.preventDefault();
//         modalFurniture.style.display = "block";
//         modalContentFurniture.src = this.href;
//         document.body.style.overflow = 'hidden';
//         modalFurniture.style.overflowY = 'hidden';
//     });

//     closeBtnFurniture.addEventListener("click", function() {
//         modalFurniture.style.display = "none";
//         modalContentFurniture.src = "";
//         document.body.style.overflow = 'auto'; 
//     });

//     function closeModalsOnEsc(event) {
//         if (event.key === "Escape") {
//             modalKitchen.style.display = "none";
//             modalContentKitchen.src = "";
//             modalFurniture.style.display = "none";
//             modalContentFurniture.src = "";
//             document.body.style.overflow = 'auto'; 
//         }
//     }

//     document.addEventListener("keydown", closeModalsOnEsc);
// });
