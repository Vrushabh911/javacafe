var orderList = [];
var menuList = document.getElementById('menuList');
var orderSummary = document.getElementById('orderList');
var checkoutBtn = document.getElementById('checkoutBtn');

menuList.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('orderBtn')) {
    var item = e.target.parentNode.querySelector('.item').textContent;
    var price = e.target.parentNode.querySelector('.price').textContent;
    orderList.push({ item: item, price: price });
    renderOrderList();
  }
});

function renderOrderList() {
  orderSummary.innerHTML = '';
  orderList.forEach(function(order) {
    var li = document.createElement('li');
    var itemSpan = document.createElement('span');
    itemSpan.textContent = order.item;
    var priceSpan = document.createElement('span');
    priceSpan.textContent = order.price;
    li.appendChild(itemSpan);
    li.appendChild(priceSpan);
    orderSummary.appendChild(li);
  });
}

checkoutBtn.addEventListener('click', function() {
  if (orderList.length > 0) {
    // Perform checkout action (add your own logic here)

    // Clear the order list
    orderList = [];
    renderOrderList();

    // Show success message (you can modify this to show a modal or redirect to another page)
    alert('Thank you for your order!');
  } else {
    alert('Please add items to your order first.');
  }
});
