function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('button[data-create]'),
      destroyBtn = document.querySelector('button[data-destroy]');
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