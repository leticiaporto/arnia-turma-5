const mostrarNoticias = (noticias) => {
  const content = document.getElementById('content')

  noticias.forEach((noticia) => {
    const noticiaHtml = `
      <div>
        ${noticia.titulo}
      </div>
    `
    content.innerHTML = content.innerHTML + noticiaHtml ;
  })
}

const getNoticias = async () => {
  const apiResponse = await fetch('http://localhost:3000/noticias')
  const noticias = await apiResponse.json()
  console.log(noticias)
  mostrarNoticias(noticias)
}