<script>
  // Wait for the document to fully load before applying the fade-in effect
  document.addEventListener{("DOMContentLoaded", function() {
    // Get the text-box element
    const textBox = document.querySelector(".text-box");
    
    // Apply the fade-in class to the text-box after the page is loaded
    setTimeout(() => {
      textBox.classList.add("fade-in");
    }, 100); // Delay to allow initial page load
  )};
</script>