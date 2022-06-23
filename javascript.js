let pass1 = document.querySelector('#pass');
let pass2 = document.querySelector('#pass2');
pass1.textContent = 'bruh';

let p1;
let p2;

pass1.addEventListener('change', () => {
    p1 = pass1.textContent;
});

pass2.addEventListener('change', () => {
    p2 = pass2.textContent;
});

pass1.addEventListener('change', () => {
    if (p1 !== p2) {
        pass1.classList.add('.error');
    }
});
pass2.addEventListener('change', () => {
    if (p1 !== p2) {
        pass2.classList.add('.error');
    }
});

pass1.addEventListener('change', () => {
    if (p1 === p2) {
        pass1.classList.remove('.error');
    }
});

pass2.addEventListener('change', () => {
    if (p1 === p2) {
        pass1.classList.remove('.error');
    }
});