let pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll("#botones a");
 
for (const boton of botones) {
    boton.addEventListener('click', function(e) {
        e.preventDefault();
 
        if (e.target.dataset.key == 'igual') {
            pantalla.textContent = eval(pantalla.textContent);
            if (pantalla.textContent.length > 8) {
                pantalla.textContent = eval(pantalla.textContent).toFixed(8);
            }
        } else if (e.target.dataset.key == 'borrar') {
            pantalla.textContent = '';
        } else {
            pantalla.textContent = pantalla.textContent + e.target.dataset.key;
        }   
    });
}