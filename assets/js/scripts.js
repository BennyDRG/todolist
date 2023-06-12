let champDeSaisie = document.querySelector('#taskToDo');
champDeSaisie.addEventListener('keyup',(event) => {
    if(event.key === 'Enter') {
        console.log(champDeSaisie.value);
        
        let todo = champDeSaisie.value;
        let result = todo;

        champDeSaisie.value = '';
 
        if (todo.length > 20) {
            result = todo.substring(0, 20) + "...";
        }
        
        
        let todoList = document.querySelector('fieldset');
        todoList.insertAdjacentHTML('beforeEnd',
        `<div class="postIt">
            <input type="checkbox" class="todo1" name="todo1">
            <label for="todo1">${result}</label>

            <button class="delete" type="button">
                Supprimer
            </button>
        </div>`);
        
        let deleteBtn = document.querySelectorAll('.delete');
        deleteBtn.forEach((delBtn) => {
            delBtn.addEventListener('click',(event) =>{
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        delBtn.parentNode.remove();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            })
        }) 
        
        let checkboxes = document.querySelectorAll('.todo1');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('click', (event) => {
                let label = event.target.nextElementSibling;
                let postIt = event.target.parentNode;
                if (checkbox.checked) {
                    label.classList.add('completed');
                    postIt.classList.add('completed');
                } else {
                    label.classList.remove('completed');
                    postIt.classList.remove('completed');
                }
            });
        });
    }
})



console.log(champDeSaisie)



        // let newDiv = document.createElement('div')
        // let imput = document.createElement('imput')
        // newDiv.appendChild(imput)
        // champDeSaisie.appendChild(newDiv)