const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalIngredients = document.getElementById('modal-ingredients');
const items = document.querySelectorAll('items');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalDesc.textContent = item.dataset.desc || '';
            modalIngredients.textContent = item.dataset.ingredients || '';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
