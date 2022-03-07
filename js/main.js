// Check Yourself! Week 6

// DOM. Селекторы Native JS
//1) Найдите все HTML-теги mark, которые находятся в div с классом .row и задайте им класс .selected .
// !Ответ

// let mark = document.querySelectorAll("mark");
// for (let i of mark) {
//   i.classList.add = "selected";
// }

//2) Обратитесь к элементу с классом .last и добавьте ему текст "Last but not least".

// ! Ответ
// let last = document.querySelector(".last");
// last.innerText = "Last but not least";

// Native JS События

//3) Создайте обработчик события, который при нажатии на div элемент выводит через alert() id либо class вашего элемента

// ! Ответ

// let checkClass = document.querySelector("div");
// checkClass.addEventListener("click", (event) => alert(event.target.className));

//4) Создайте в HTML button. Навесьте на этот элемент обработчик события, который
// при нажатии на кнопку удаляет эту кнопку.

// !answer
// let btn = document.createElement("button");

// let div = document.querySelector(".last");
// div.appendChild(btn);
// btn.innerText = "Нажми, я удалюсь";
// btn.addEventListener("click", () => {
//   btn.style.display = "none";
// });

// JQuery Селекторы и События
// Подключите JQuery через CDN:

// CDN для подключения JQuery -
{
  /* <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> */
}

//5) Навесьте на событие движения мыши обработчик, который будет выводить в консоль
// координаты движения. Примечание: выводите их как x и y.
// Событие надо «повесить» на document
// !Ответ
// document.addEventListener("mousemove", function (event) {
//   console.log(`X ${event.clientX} : Y ${event.clientY}`);
// });
//6) Создайте кнопку и нумерованный список с 6 li элементами в HTML. Навесьте на кнопку обработчик события, который при нажатии проходится циклом по элементам списка и меняет их цвет на зеленый.
let button = document.createElement("button");
button.innerHTML = "click";
let li1 = document.createElement("li");
li1.innerText = "1";
let li2 = document.createElement("li");
li2.innerText = "2";
let li3 = document.createElement("li");
li3.innerText = "3";
let li4 = document.createElement("li");
li4.innerText = "4";
let li5 = document.createElement("li");
li5.innerText = "5";
let li6 = document.createElement("li");
li6.innerText = "6";
let body = document.querySelector("body");
body.append(button);
body.append(li1);
body.append(li2);
body.append(li3);
body.append(li4);
body.append(li5);
body.append(li6);
button.addEventListener("click", function () {
  li1.style.backgroundColor = "green";
  li2.style.backgroundColor = "green";
  li3.style.backgroundColor = "green";
  li4.style.backgroundColor = "green";
  li5.style.backgroundColor = "green";
  li6.style.backgroundColor = "green";
});
// Local Storage

// Закоментируйте ненужный HTML с предыдущих заданий
//7) Создайте в LocalStorage пустой объект localData, с ним в дальнейшем и будем работать
// После этого создайте объект со стилями и положите его в LocalStorage, затем получите его обратно и примените эти стили к "body"

//8) Сделайте форму, при submit'е(отправке) которой, в LocalStorage, в объекте localData создаётся новый объект с ключом и информацией из вашей формы:
// пример нового объекта:
// {
//   key: data
// }
// где key - это значение из первого input'а, а data - из второго
// !answer
// let inp1 = $("#inp1");
// let inp2 = $("#inp2");
// let btnLocal = $("#btn-local");

// btnLocal.on("submit", function () {
//   let data = {
//     inp1: inp2,
//   };
//   inp1 = inp1.val();
//   inp2 = inp2.val();
// });
