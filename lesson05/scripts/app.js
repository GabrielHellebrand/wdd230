document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const addChapterButton = document.querySelector('#addChapter');
    const list = document.querySelector('#list');
    const message = document.querySelector('#message');

    // Function to add a new chapter
    function addChapter() {
        if (input.value !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            const upButton = document.createElement('button');
            const downButton = document.createElement('button');
            
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            upButton.textContent = '⬆️';
            downButton.textContent = '⬇️';
            
            deleteButton.classList.add('delete');
            upButton.classList.add('move-up');
            downButton.classList.add('move-down');

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            upButton.addEventListener('click', function () {
                if (li.previousElementSibling) {
                    list.insertBefore(li, li.previousElementSibling);
                }
            });

            downButton.addEventListener('click', function () {
                if (li.nextElementSibling) {
                    list.insertBefore(li.nextElementSibling, li);
                }
            });

            li.appendChild(deleteButton);
            li.appendChild(upButton);
            li.appendChild(downButton);
            list.appendChild(li);
            input.value = '';
            input.focus();
            message.textContent = ''; // Clear any previous error message
        } else {
            // Handle the case where the input is blank
            message.textContent = 'Please enter a chapter before adding.'; // Display an error message
            input.focus();
        }
    }

    addChapterButton.addEventListener('click', addChapter);

    // Allow adding chapters when the Enter key is pressed
    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addChapter();
        }
    });
});