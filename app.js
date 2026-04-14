const input = document.getElementById('task-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('task-list');

button.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    list.appendChild(li);

    input.value = ''; // wyczyść pole
  }
});