document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput'); 
  const products = document.querySelectorAll('.product'); 

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 

    products.forEach(product => {
      const productName = product.querySelector('h2').textContent.toLowerCase(); 
      if (productName.includes(searchTerm)) {
        product.style.display = 'block'; 
      } else {
        product.style.display = 'none'; 
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll('.product');

  
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    
    products.forEach(product => {
      const productName = product.querySelector('h2').textContent.toLowerCase();
      const productDescription = product.querySelector('p').textContent.toLowerCase();

      
      if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
        product.classList.add('show');
      } else {
        product.classList.remove('show'); 
      }
    });
  });
});

