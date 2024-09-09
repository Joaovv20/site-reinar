function executarBounce() {
    elemento.classList.add('animar-bounce');

    setTimeout(() => {
        elemento.classList.remove('animar-bounce');
    }, 1000);
}
const elemento = document.getElementById('elemento');

setInterval(executarBounce, 5000);