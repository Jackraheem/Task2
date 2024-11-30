const $marker = document.querySelector('.marker');
const $list = document.querySelectorAll('ul li');

$list.forEach(($li) => {
    $li.addEventListener('mousemove', (event) => {
        // Move and resize marker
        $marker.style.left = $li.offsetLeft + 'px';
        $marker.style.width = $li.offsetWidth + 'px';

        // Update active state
        const currentActive = document.querySelector('.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        $li.classList.add('active');
    });
});

// Initialize marker position on first item
window.addEventListener('DOMContentLoaded', () => {
    const firstItem = $list[0];
    if (firstItem) {
        $marker.style.left = firstItem.offsetLeft + 'px';
        $marker.style.width = firstItem.offsetWidth + 'px';
        firstItem.classList.add('active');
    }
});




