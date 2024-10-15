let input_bar = document.querySelector(".barra_busc");
let busc_contenedor = document.getElementById("buscador");

busc_contenedor.addEventListener("mouseover", () => {
    input_bar.style.display = 'block';
})

busc_contenedor.addEventListener("mouseout", () => {
    if (document.activeElement = input_bar){
        return;
    }
    input_bar.style.display = 'none';
})

input_bar.addEventListener("focusout", () => {
    if (busc_contenedor.matches(':hover')){
        return;
    }
    input_bar.style.display = 'none';
})