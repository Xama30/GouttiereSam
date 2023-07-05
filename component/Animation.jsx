import { useEffect } from 'react';

function Animation() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
            });
        });
        const hiddenElements = document.querySelectorAll('.hidden_fade-bottom');
        hiddenElements.forEach((el) => observer.observe(el));

        const hiddenElementsNumbers = document.querySelectorAll('.hidden_fade-right');
        hiddenElementsNumbers.forEach((el) => observer.observe(el));
        }, []);
  return '';
}

export default Animation