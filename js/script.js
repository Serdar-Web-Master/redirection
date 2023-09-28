// import { a, b} from "./vars.js";

// console.log(a,b);

// const myLink = document.createElement("a");

// myLink.getAttribute()

// создаем ссылку
const link = document.createElement('a');
// добавляем атрибут href
link.setAttribute('href', 'https://drive.google.com/drive/folders/1NgBOBZC2VM902inex2F8epLQh9JNJpJd?usp=sharing');
// добавляем атрибут target
// link.setAttribute('target', '_blank');
// добавляем текст ссылки
link.textContent = 'Перейти';
// добавляем ссылку на страницу
document.body.append(link);

link.click();

