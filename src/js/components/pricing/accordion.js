export const useAccordion = () => {

const accordionLists = document.querySelectorAll('.accordion-list');
accordionLists.forEach(el => {

    // Открываем по умолчанию элементы с классом --opened
    const openedItem = el.querySelector('.accordion-list__item--opened');
    if (openedItem) {
        const openedContent = openedItem.querySelector('.accordion-list__content');
        if (openedContent) {
            openedContent.style.maxHeight = openedContent.scrollHeight + 'px';
        }
    }
    
    el.addEventListener('click', (e) => {        
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        // Закрываем все открытые элементы, кроме текущего
        accordionLists.forEach(list => {
            const openedItem = list.querySelector('.accordion-list__item--opened');
            if (openedItem && openedItem !== accordionItem) {
                openedItem.classList.remove('accordion-list__item--opened');
                openedItem.classList.remove('faq__accordion-list-item--opened')
                const openedContent = openedItem.querySelector('.accordion-list__content'); // Предполагаем, что это содержимое
                if (openedContent) {
                    openedContent.style.maxHeight = '0px';
                }
            }
        });

        // Открываем или закрываем текущий элемент
        accordionItem.classList.toggle('accordion-list__item--opened');
        accordionItem.classList.toggle('faq__accordion-list-item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0px';

        }
    });
});

} 
