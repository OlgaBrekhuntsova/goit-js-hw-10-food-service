import menuTemplate from '../templates/menu.hbs';
import menuItems from '../menu.json';
const menuListRef = document.querySelector('ul.js-menu');
const markup = menuTemplate(menuItems);
// menuListRef.innerHTML = markup; //будет перезаписан весь список
menuListRef.insertAdjacentHTML('afterbegin', markup); //будут добавлены новые элементы в список
