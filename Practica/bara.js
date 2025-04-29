document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.product');
  
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase();
  
      products.forEach(product => {
        const text = product.innerText.toLowerCase();
        if (text.includes(filter)) {
          product.style.display = '';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });
  