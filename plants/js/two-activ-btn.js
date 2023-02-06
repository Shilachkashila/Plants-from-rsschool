const btn1 = document.getElementById("Gardens");
const btn2 = document.getElementById("Lawn");
const btn3 = document.getElementById("Planting");
const menu = document.querySelector('.header-menu')

const pictures1 = document.querySelectorAll(".gardens");
const pictures2 = document.querySelectorAll(".lawn");
const pictures3 = document.querySelectorAll(".planting");

let btn1Status = 0;
let btn2Status = 0;
let btn3Status = 0;

//є три кнопки приклікі на одну з них в неї з'являеться статус 1 
//в залежності віт статусу кнопки заблюрюються картинки
//при клікі на якусь кнопку змінюється статус усіх залежно від того який був до цього, але та по якій клік завжди статус 1



//function articleBlur () {

  // for (let item of pictures1) {
  //     console.log(btn1Status)
  //   btn1Status === 1 || btn1Status === 2 ? item.classList.add('blur') : item.classList.remove('blur');
  // }
  // for (let item of pictures2) {
  //   btn2Status === 1 || btn2Status === 2 ? item.classList.add('blur') : item.classList.remove('blur');
  // }
  // for (let item of pictures3) {
  //   btn3Status === 1 || btn3Status === 2 ? item.classList.add('blur') : item.classList.remove('blur');
  // } 
//}


menu.onclick = function(event) {
  let target = event.target;
  console.log(btn1Status)

  if (target.tagName === 'BUTTON') {
    btn1Status === 1 ? btn1Status = 2 : btn1Status = 0;
    btn2Status === 1 ? btn2Status = 2 : btn2Status = 0;
    btn3Status === 1 ? btn3Status = 2 : btn3Status = 0;
  
  }
  if (target.tagName != 'BUTTON') {
  
  btn1Status = 0;
  btn2Status = 0;
  btn3Status = 0;

  }
};
