export function crearTarjetaLibro(elemento) {
    const { image, title} = elemento;
    const card = document.createElement('div');
    card.classList.add('card','bg-transparent','rounded-3', 'p-1', 'col-12', 'col-md-3', 'col-lg-3', 'mb-md-3');

    card.innerHTML = `
        <img src="${image}" class="img-fluid card-img-top p-1">
        <div class="card-body ps-0 pe-0 pb-0">
            <div class="ribbon"><span class="fw-bold text-white text-center">nuevos</span></div>
            <button type="button" class="btn mb-0  w-100 btn-primary border-0 bg-color-btn" data-bs-toggle="modal" data-bs-target="#modal-${title.replace(/ /g, '-')}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
                Ver Detalles
            </button>
        </div>
    `;
    return card;
}
export function crearCardLibro(elemento) {
    const { image, title, price, priceOffer} = elemento;
    const cardBook = document.createElement('div');
    cardBook.classList.add('card','bg-transparent','rounded-3', 'p-2', 'col-12', 'col-md-4','col-lg-3', 'mb-lg-3', 'mb-md-3');

    cardBook.innerHTML = `
        <img src="${image}" class="img-fluid card-img-top p-1">
        <div class="card-body">
            <h5 class="card-title text-warning">${title}</h5>
            <p class="card-text m-0 text-white">Precio Normal: <span class="text-decoration-line-through text-danger fw-bold">${price}</span></p>
            <p class="card-text text-white">Precio oferta: <span class="text-info fw-bold">${priceOffer}</span></p>
            <a href="https://wa.me/3127393740?text=Hola, Deseo adquirir este libro de ${title}" class="btn-card btn btn-primary me-1 border-0 mb-lg-2" target="_blank" rel="noopener noreferrer">Comprar</a>
            <button type="button" class="btn-card btn btn-primary border-0 bg-btn mb-lg-2" data-bs-toggle="modal" data-bs-target="#modal-${title.replace(/ /g, '-')}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                </svg>
                Ver Detalles
            </button>
        </div>     
    `;
    return cardBook;
}
export function crearModalDetalles(elemento) {
    const { image, title, priceOffer, category, description, author } = elemento;
    const modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.id = `modal-${title.replace(/ /g, '-')}`;
    modal.tabIndex = -1;
    modal.setAttribute('aria-labelledby', `modal-${title.replace(/ /g, '-')}-label`);
    modal.setAttribute('aria-hidden', true);

    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content text-black">
                <div class="modal-header">
                    <h4 class="modal-title" id="modal-${title.replace(/ /g, '-')}-label">${title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${image}" class="img-fluid card-img-top">
                    <h5 class="mt-3"><span class="fw-bold">Categoría</span>: ${category}</h5>
                    <h5><span class="fw-bold">Autor</span>: ${author}</h5>
                    <p><span class="fw-bold">Descripción</span><br> ${description}</p>
                    <p class="fw-bold">Precio oferta <span class="bg-danger text-white p-2 rounded"> ${priceOffer}</span></p>
                     <a href="https://wa.me/3127393740?text=Hola, Deseo adquirir este libro de ${title}" class="btn btn-success border-0 w-100 fw-bold" target="_blank" rel="noopener noreferrer">Comprar &#128722</a>                           
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger fw-bold" data-bs-dismiss="modal">Cerrar X</button>
                </div>
            </div>
        </div>
    `;
    return modal;
}
