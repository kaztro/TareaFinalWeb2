window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            let eBottom = document.createElement("input");
            let dBottom = document.createElement("input");
            let erase = document.createElement("label");
            let done = document.createElement("label");
            let theTask = document.createElement("p");
            theTask.id = task;
            eBottom.type = "checkbox";
            dBottom.type = "checkbox";
            theTask.innerText = task;
            element.appendChild(theTask);
            erase.innerText = "Eliminar";
            done.innerText = "Finalizado";
            element.appendChild(erase);
            element.appendChild(eBottom);
            element.appendChild(done)
            element.appendChild(dBottom);

            // Elmine de la lista
            eBottom.addEventListener("change", function () {
                console.log(element);
                if (this.checked) {
                    let parent = element.parentNode;
                    if (parent) parent.removeChild(element);
                }
            });
            
            // Añadir un boton para marcar de finalizado
            dBottom.addEventListener("change", function () {
                if (this.checked) {
                    document.getElementById(task).style.textDecoration = "line-through";
                }
                else {
                    document.getElementById(task).style.textDecoration = "none";
                }
            });

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}