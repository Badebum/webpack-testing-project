const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const btnThemRef = document.querySelector('#theme-switch-toggle');

reloadTheme();

const onChangeThemBody = () => {
  if (btnThemRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};

btnThemRef.addEventListener('change', onChangeThemBody);

function reloadTheme() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
    switchRef.checked = true;
  }
}