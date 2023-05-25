document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
    
    // Display booking information
    alert('Booking Details:\n\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nDate: ' + date + '\nTime: ' + time + '\nNumber of Guests: ' + guests);
    
    // Reset form
    document.getElementById('bookingForm').reset();
});
