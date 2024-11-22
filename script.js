const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// JavaScript to toggle FAQ expand/collapse effect
document.querySelectorAll('.faq').forEach(item => {
    item.querySelector('.question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

document.querySelector('.search-bar input').addEventListener('input', () => {
    if (document.querySelector('.search-bar input').value === '') {
        document.querySelectorAll('.faq').forEach(faq => {
            faq.style.display = 'block'; // Show all FAQ when search bar is cleared
        });
    }
});

// Function to perform search
function performSearch() {
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const questionText = faq.querySelector('.question h3').textContent.toLowerCase();
        const answerText = faq.querySelector('.answer').textContent.toLowerCase();

        if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
            faq.style.display = 'block'; // Show FAQ if it matches search term
        } else {
            faq.style.display = 'none'; // Hide FAQ if it doesn't match search term
        }
    });
}

// Event listener for search button
document.querySelector('.search-bar button').addEventListener('click', performSearch);

// Event listener for 'Enter' key
document.querySelector('.search-bar input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        performSearch(); // Trigger search when Enter key is pressed
    }
});