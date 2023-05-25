document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expirationDate = document.getElementById('expirationDate').value;
    var cvv = document.getElementById('cvv').value;
  
    // Validate form fields (add your own validation logic here)
  
    // Process payment (simulate successful payment for demonstration)
    alert('Payment Successful!\nThank you, ' + name + '!');
  
    // Reset form
    document.getElementById('paymentForm').reset();
  });
  