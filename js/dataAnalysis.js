import { booksCategory } from './modulos/obtener-contenidoJSON.js';
import { crearCardLibro, crearModalDetalles } from './modulos/crear-card-y-modal.js';

export function mostrarLibrosPorCategoria(categoriaDeseada) {
    booksCategory(categoriaDeseada)
    .then(librosFiltrados => {
      const contenedorLibros = document.getElementById('contenedorLibros');
      const contentBooks = document.querySelector('.contentBooks');
      contenedorLibros.innerHTML = '';

      librosFiltrados.forEach(libro => {
        const card = crearCardLibro(libro);
        contenedorLibros.appendChild(card);
        const modal = crearModalDetalles(libro);
        contentBooks.appendChild(modal);
      });
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });
}
mostrarLibrosPorCategoria('Data Analysis');


