const productsContainer = document.querySelector(".products");
const productsList = document.querySelectorAll(".product");

productsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("product__quantity-control")) {
    // console.log(event.target);
    quantityControl(event.target.closest(".product").dataset.id, event.target)
  }
})

function quantityControl(id, event) {
  if (event.classList.contains("product__quantity-control_dec")) {
    console.log("привет")
  } else if (event.classList.contains("product__quantity-control_inc")) {
    console.log("пока")
  }
}
