const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
checkbox : document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
label: document.querySelector('label.theme-switch__track'),
}
if (localStorage.getItem('theme') !== Theme.DARK) { refs.body.classList.add(Theme.LIGHT) }
else {
    refs.body.classList.add(Theme.DARK);
    refs.checkbox.checked = true;
};
refs.checkbox.addEventListener('change', handleTheme);
function handleTheme(event) {
        if (refs.body.classList.contains(Theme.LIGHT)) {
            refs.body.classList.add(Theme.DARK);
            refs.body.classList.remove(Theme.LIGHT);
            localStorage.setItem('theme', Theme.DARK);
                 }
        else {
            refs.body.classList.add(Theme.LIGHT);
            refs.body.classList.remove(Theme.DARK);
            localStorage.setItem('theme', Theme.LIGHT);
    }
       };

