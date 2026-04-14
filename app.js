const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('task-list');
const themeBtn = document.getElementById('theme-toggle');

// ➕ dodawanie zadania
addBtn.addEventListener('click', () => {
  const taskText = input.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Usuń';

    // ✔️ oznacz jako wykonane
    checkbox.addEventListener('change', () => {
      li.classList.toggle('done', checkbox.checked);
    });

    // 🗑️ usuwanie
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

// 🌙 zmiana motywu (NAPRAWIONE – bez migania)
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? 'Tryb jasny' : 'Tryb ciemny';

  // zapamiętanie
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 💾 wczytanie zapisanego motywu
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeBtn.textContent = 'Tryb jasny';
  }
});