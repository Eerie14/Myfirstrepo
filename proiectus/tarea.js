$(document).ready(function() {

    // Agregar tarea
    $('#addTaskBtn').click(function() {
        let taskText = $('#taskInput').val().trim();

        if (taskText !== '') {
            let taskItem = `
                <li>
                    <span class="task">${taskText}</span>
                    <div>
                        <button class="complete-btn">✔️</button>
                        <button class="delete-btn">❌</button>
                    </div>
                </li>`;

            $('#taskList').append(taskItem);
            $('#taskInput').val('');  // Limpiar campo
        }
    });

    // Marcar como completada
    $(document).on('click', '.complete-btn', function() {
        $(this).closest('li').find('.task').toggleClass('completed');
    });

    // Eliminar tarea
    $(document).on('click', '.delete-btn', function() {
        $(this).closest('li').remove();
    });

});

