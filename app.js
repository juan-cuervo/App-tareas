const btnAgregar = document.querySelector("#btn-agregar");
const listaTareas = document.querySelector("#lista-tareas");

// Clase
class App {
    // Agregando Tarea
    agregarTarea() {
        const input = document.querySelector("#input");
        const elemento = document.createElement("li");
        const texto = document.createTextNode(input.value);

        if (input.value === "") {
            input.classList.add("error");
            input.setAttribute("placeholder", "Escribe una tarea valida");
            return false;
        }

        listaTareas.appendChild(elemento);
        elemento.appendChild(texto);
        input.value = "";
    }

    // Eliminando Tarea
    eliminarTarea(evento) {
        listaTareas.removeChild(evento.target);
        alert("tarea eliminada");
    }

    //
    errorInput(evento) {
        evento.target.classList.remove("error");
        evento.target.setAttribute("placeholder", "Escribe tu tarea...");
    }
}

const tarea = new App();

// Eventos
btnAgregar.addEventListener("click", tarea.agregarTarea);

listaTareas.addEventListener("click", tarea.eliminarTarea);

input.addEventListener("click", tarea.errorInput);

window.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        tarea.agregarTarea();
    }
});
