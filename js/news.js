const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalMaterials = document.getElementById('modal-materials');
const allItems = document.querySelectorAll('main.merchandise .grid items');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

allItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const desc = item.getAttribute('data-desc');
        const materials = item.getAttribute('data-materials');
        
        modalImg.src = img.src;
        modalDesc.textContent = desc;
        modalMaterials.textContent = materials;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
