import { obtenerContenidoJSON } from './modulos/obtener-contenidoJSON.js';
import { crearCardLibro, crearModalDetalles } from './modulos/crear-card-y-modal.js';

 async function cargarDatosYMostrarContenido() {
    try {
        const data = await obtenerContenidoJSON();
        const contenedorCards = document.getElementById('contenedorLibros');
        const selectCategoria = document.getElementById('categoria');

        selectCategoria.innerHTML = '<option value="">Seleccione</option>';
        const categoriasUnicas = new Set();

        data.forEach(item => {
            categoriasUnicas.add(item.category);
        });

        categoriasUnicas.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria;
            option.textContent = categoria;
            selectCategoria.appendChild(option);
        });

        selectCategoria.addEventListener('change', mostrarContenidoFiltrado);

        function mostrarContenidoFiltrado() {
            const categoriaSeleccionada = selectCategoria.value;

            const librosFiltrados = data.filter(libro => {
                const cumpleCategoria = categoriaSeleccionada === '' || libro.category === categoriaSeleccionada;
                return cumpleCategoria;
            });

            contenedorCards.innerHTML = '';

            librosFiltrados.forEach(elemento => {
                const card = crearCardLibro(elemento);
                contenedorCards.appendChild(card);

                const modal = crearModalDetalles(elemento);
                document.body.appendChild(modal);
            });
        }
        mostrarContenidoFiltrado();
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}
cargarDatosYMostrarContenido(); 

