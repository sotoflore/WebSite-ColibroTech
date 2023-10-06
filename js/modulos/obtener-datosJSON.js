export async function obtenerDatosJSON() {
    try {
        const response = await fetch('./data/new-books.json');
        return await response.json();
    } catch (error) {
        console.error('Ocurrió un error al obtener los datos JSON:', error);
        throw error;
    }
}
