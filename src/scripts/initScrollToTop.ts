export function initScrollToTop() {
    const button = document.getElementById('scrollToTop');
    if (!button) return;

    //  Smooth scroll to top
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    });
}
