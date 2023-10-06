const url = './data/books.json'

export async function obtenerContenidoJSON() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Ocurrió un error al obtener los datos JSON:', error);
        throw error;
    }
}
export async function booksCategory(category) {
  const response = await fetch(url);
  const data = await response.json();
  return data.filter(elemento => elemento.category === category);
}
