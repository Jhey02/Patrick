const carroselImages = document.querySelectorAll(".carrosel");
const fotoM = document.getElementById('MainFoto')

carroselImages.forEach((image) => {
    image.addEventListener("click", () => {
        // Obtener el src de la imagen clickeada
        const newMainFotoSrc = image.getAttribute("src");

        // Obtener la imagen principal (MainFoto) por su id
        const mainFoto = document.getElementById("MainFoto");

        // Cambiar el src de la imagen principal por el de la imagen clickeada
        mainFoto.setAttribute("src", newMainFotoSrc);
        
    });
});

