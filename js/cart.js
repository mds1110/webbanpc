// cart.js
function getCartItems() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  
  function renderCart() {
    const container = document.getElementById("cart-container");
    const cartItems = getCartItems();
  
    if (cartItems.length === 0) {
      container.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
      return;
    }
  
    let total = 0;
  
    const html = cartItems.map((item, index) => {
      total += item.price * item.quantity;
  
      return `
        <div class="row border-bottom py-3 align-items-center">
          <div class="col-md-2">
            <img src="${item.img}" class="img-fluid" alt="${item.name}">
          </div>
          <div class="col-md-4">
            <h5>${item.name}</h5>
            <p>${item.ram || ""} ${item.ssd || ""}</p>
          </div>
          <div class="col-md-2">
            <strong>${item.price.toLocaleString()}₫</strong>
          </div>
          <div class="col-md-2">
            <input type="number" value="${item.quantity}" min="1" class="form-control quantity" data-index="${index}">
          </div>
          <div class="col-md-2">
            <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Xoá</button>
          </div>
        </div>
      `;
    }).join("");
  
    container.innerHTML = `
      ${html}
      <div class="text-end mt-4">
        <h4>Tổng tiền: ${total.toLocaleString()}₫</h4>
        <a href="checkout.html" class="btn btn-success mt-2">Thanh toán</a>
      </div>
    `;
  
    attachEvents();
  }
  
  function attachEvents() {
    document.querySelectorAll(".quantity").forEach(input => {
      input.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        const cart = getCartItems();
        cart[index].quantity = parseInt(e.target.value) || 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const cart = getCartItems();
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }
  
  renderCart();
  