function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btns = document.querySelectorAll('button');
const createBtn = btns[0],
      destroyBtn = btns[1];
const inputNumberRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
function onCreateBtnClick(event) {
 const quantity = inputNumberRef.value;
 let markup = '';
 for (let index = 0; index < quantity; index++) {
  markup = markup.concat(`<div style="width: ${30+10*index}px; height: ${30+10*index}px; background:${getRandomHexColor()}"></div>`);
 }
 boxesRef.innerHTML = markup;
}
destroyBtn.addEventListener('click', onDestroyBtnClick);
function onDestroyBtnClick(event) {
  boxesRef.innerHTML = '';
}