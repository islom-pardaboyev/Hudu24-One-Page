function copyText() {
    const text = document.querySelector('.text');
    const elResult = document.querySelector('.result-text');
    const elModal = document.querySelector('.modal');

    elResult.textContent = 'Text Copied';

    elModal.classList.remove('top-[-50%]');
    elModal.classList.remove('invisible');

    setTimeout(function () {
        elResult.textContent = '';
        elModal.classList.add('top-[-50%]');
        elModal.classList.add('invisible');
    }, 3000);

    navigator.clipboard.writeText(text.textContent)
}