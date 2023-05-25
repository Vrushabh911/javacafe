document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var rating = document.getElementById('rating').value;
    var comment = document.getElementById('comment').value;
  
    // Validate form fields (add your own validation logic here)
  
    // Save feedback to a database or display it on the console (for demonstration)
    console.log('Feedback submitted:');
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Rating: ' + rating);
    console.log('Comment: ' + comment);
  
    // Reset form
    document.getElementById('feedbackForm').reset();
  });
  