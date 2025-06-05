const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const parentFaq = toggle.parentNode;

        // Close all other active FAQ items
        document.querySelectorAll('.faq.active').forEach(activeFaq => {
            if (activeFaq !== parentFaq) { // Don't remove active from the current one
                activeFaq.classList.remove('active');
            }
        });

        // Toggle the active class on the clicked FAQ item
        parentFaq.classList.toggle('active');
    });
});