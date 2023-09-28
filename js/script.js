// import { a, b} from "./vars.js";

// console.log(a,b);


// создаем ссылку
const link = document.createElement('a');
// добавляем атрибут href
link.setAttribute('href', 'https://disk.yandex.ru/d/hzce6b38p06c7g');
// добавляем атрибут target
// link.setAttribute('target', '_blank');
// добавляем текст ссылки
link.textContent = 'Перейти';
// добавляем ссылку на страницу
document.body.append(link);

link.click();

