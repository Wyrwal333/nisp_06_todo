const input = document.getElementById('task-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('task-list');

button.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';

    // checkbox – oznaczanie jako wykonane
    checkbox.addEventListener('change', () => {
      li.classList.toggle('done', checkbox.checked);
    });

    // usuwanie elementu
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);
    input.value = '';
  }
});