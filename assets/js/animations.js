// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all product items with the 'fade-in' class
    const products = document.querySelectorAll('.fade-in');
    
    // Loop through each product
    products.forEach((product, index) => {
        // Delay the fade-in animation based on the product's index
        const delay = index * 100; // Delay increases with each product
        product.style.animationDelay = `${delay}ms`;
        
        // Add 'fade-in' class to trigger the animation
        product.classList.add('fade-in');
    });
});
