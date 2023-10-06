import { obtenerDatosJSON } from './modulos/obtener-datosJSON.js';
import { crearTarjetaLibro, crearModalDetalles } from './modulos/crear-card-y-modal.js';

async function mostrarContenidoDesdeJSON() {
    try {
        const data = await obtenerDatosJSON();
        const contenedorCards = document.getElementById('contenedorLibros');
        const container = document.querySelector('.container')

        data.forEach(elemento => {
            const card = crearTarjetaLibro(elemento);
            contenedorCards.appendChild(card);

            const modal = crearModalDetalles(elemento);
            contenedorLibros.appendChild(modal);
        });
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}
mostrarContenidoDesdeJSON();
