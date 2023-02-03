const header = document.querySelector('.header');
const headerMain = document.querySelector('#first')
// const first = document.querySelector('#first');
// const headerHeigt = header.offsetHeight;
const headerHeight = headerMain.offsetHeight;

export function headerFixed() {
    window.addEventListener('scroll', () => {
        let scrollDistanse = window.scrollY;
    
        if (scrollDistanse >= headerHeight) {
            header.classList.add('header--fixed');
        } else {
            header.classList.remove('header--fixed');
        }
    });
}