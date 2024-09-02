document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
        document.querySelectorAll('.accordion-item').forEach((item) => {
            const content = item.querySelector('.accordion-content');
            const plusIcon = item.querySelector('.accordion-icon-plus');
            const minusIcon = item.querySelector('.accordion-icon-minus');
            if (item !== header.parentElement) {
                content.classList.add('hidden');
                plusIcon.classList.remove('hidden');
                minusIcon.classList.add('hidden');
            }
        });
        const content = header.nextElementSibling;
        const plusIcon = header.querySelector('.accordion-icon-plus');
        const minusIcon = header.querySelector('.accordion-icon-minus');
        content.classList.toggle('hidden');
        plusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('hidden');
        plusIcon.classList.toggle('rotate-180');
        minusIcon.classList.toggle('rotate-180');
        
    });
});

