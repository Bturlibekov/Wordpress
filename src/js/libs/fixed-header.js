const header = document.querySelector('.header');
const first = document.querySelector('#first');
const headerHeigt = header.offsetHeight;
const firtstHeight = first.offsetHeight;

export function headerFixed() {
    window.addEventListener('scroll', () => {
        let scrollDistanse = window.scrollY;
    
        if (scrollDistanse >= firtstHeight + headerHeigt) {
            header.classList.add('header--fixed');
            first.style.marginTop = `${headerHeigt}px`;
        } else {
            header.classList.remove('header--fixed');
            first.style.marginTop = null;
        }
    });
}