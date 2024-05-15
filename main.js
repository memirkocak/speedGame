const box = document.querySelector('#box');

function createGame(){


  for(let i = 0; i < 4; i++){
      const divBox = document.createElement('div');
      box.appendChild(divBox);
    for(let j = 0; j < 4; j++){
      const btn = document.createElement('button');
      divBox.appendChild(btn);
      btn.setAttribute('class', 'blue')
    }
  }
}
createGame();

function Game(){
const allBtn = document.querySelectorAll('button');
let redBtn = [];

for(let i = 0; i < allBtn.length; i++){
    allBtn[i].addEventListener('click',()=>{
    allBtn[i].className = 'blue';
    if(allBtn[i].id === 'red'){
      redBtn.pop();
    }
    
  });
}
let gameTime = 2000;

function clear (){
  const A = setInterval(() => {
    const random =Math.floor(Math.random() * 17);
    if(allBtn[random].className === 'blue'){
    allBtn[random].className = 'red';
    allBtn[random].id = 'red';
    redBtn.push(allBtn[random]);

    if(gameTime > 400){
        gameTime-=200;
        console.log(gameTime);
    }
    }
  

    if(redBtn.length > 3){
      console.log('GAME OVER !!!');
      box.remove();
      const p = document.createElement('p');
      document.body.appendChild(p)
      p.textContent = 'GAME OVER !!!';
      gameTime = 3000000000000;
      const restart = document.createElement('button');
      document.body.appendChild(restart);
      restart.textContent = 'restart';
      restart.addEventListener('click',()=>{
        window.location.reload();
      });
    }

    console.log(redBtn);
      clearInterval(A);
      clear();
  }, gameTime);
}

clear();
  
}
Game();