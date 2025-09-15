const btnCard = document.querySelectorAll('.card-btn');
const modalCard = document.querySelectorAll('.modal-card');
const card = document.querySelectorAll('.card');
const btnFechar = document.querySelectorAll('#fechar');

const travarBody = document.querySelector('body');

btnCard.forEach((btn, indexBtn) => {

    btn.addEventListener("click", () => {
        abrirModal(indexBtn);
    }) 
})

function abrirModal(indexBtn) {
    modalCard.forEach((modal, indexModal) => {
        // se o index do modal for igual ao index do btn, abrir esse modal
        if (indexBtn === indexModal) {
            modal.classList.add('aberto');
            travarBody.classList.add('open');
        }

        btnFechar.forEach((fechar, indexFechar) => {
            fechar.addEventListener('click', () => {
                if (indexFechar === indexBtn) {
                    modal.classList.remove('aberto');
                    travarBody.classList.remove('open');
                }
            })
        })
    });
}