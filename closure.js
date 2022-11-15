/* У програмуванні існує загальний термін “замикання”, який розробники зазвичай мають знати.
Замикання – це функція, яка запам’ятовує свої зовнішні змінні та може отримати до них доступ. У деяких мовах це зовсім неможливо, або функція має бути написана особливим чином. Але, як пояснювалося вище, в JavaScript замикання для функції – це природньо і не потребує жодних зусиль (є лише один виняток, який ми розглянемо у Синтаксис "new Function"). 
Тобто: функції автоматично запам’ятовують, де вони були створені, використовуючи приховану властивість [[Environment]], а потім їхній код може отримати доступ до зовнішніх змінних.
Коли під час співбесіди розробник отримує запитання “що таке замикання?”, правильною відповіддю буде визначення замикання та пояснення, що всі функції в JavaScript є замиканнями, і, можливо, ще кілька слів про технічні деталі: властивість [[Environment]], і як взагалі працюють лексичні середовища.*/
function counter() { // function with closure
  let a = 0;
  return function add() {  // these is closure
    a++;
    console.log(a);
  };
}

let add = counter();

console.log(add.prototype);
add();
add();
add();
add();