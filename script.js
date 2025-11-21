// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
/* ============================
   FITUR KERANJANG
============================ */
let cart = [];
const cartList = document.getElementById("cart-list");
const checkoutBtn = document.getElementById("checkoutBtn");

// tombol tambah ke keranjang
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    let itemName = btn.getAttribute("data-item");
    cart.push(itemName);
    renderCart();
  });
});

// render keranjang ke layar
function renderCart() {
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    cartList.appendChild(li);
  });
}

// checkout ke WhatsApp
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let pesan = "Halo, saya ingin memesan:%0A";
  cart.forEach((item, i) => {
    pesan += `${i + 1}. ${item}%0A`;
  });

  let nomor = "6285695570167"; // nomor WA kamu
  let url = `https://wa.me/${nomor}?text=${pesan}`;

  window.open(url, "_blank");
});
// fungsi notifikasi toast
function showToast(text) {
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
