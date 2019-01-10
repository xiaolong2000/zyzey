// var randomNumber=Math.floor((Math.random()*101));
var randomNumber=2;
 console.log(randomNumber);

 var guessField=document.querySelector('.guessField');
 console.log(guessField);
//  console.log(guessField.type);
var guesses=document.querySelector('.guesses');
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');

var guessCount=1;
var resetButton;
guessField.focus();

function checkGuess(){
//  document.write('.单机事件');
var userGuess=Number(guessField.value);
// console.log(typeof userGuess);
// console.log(userGuess);

  //如果用户猜测次数为1，则在猜数历史数据字符串中增加前缀提示
if(guessCount===1){ 
    guesses.textContent = '上次猜的数: ';
}
//将用户输入的猜数接入猜数历史中，并用空格隔开
guesses.textContent+= userGuess+' ';
if(userGuess === randomNumber){
    lastResult.textContent='恭喜你猜对了!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent='';
    setGameOver();}
    else if(guessCount===10){
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
    }
    // 猜错提示
    else{
        lastResult.textContent = '你猜错了！';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) 
        // 低了提示
        {
        lowOrHi.textContent = '刚才你猜低了！';
    }
    // 高了提示
    else if(userGuess > randomNumber) {
        lowOrHi.textContent = '刚才你猜高了！';
    }

    guessCount++;
    guessField.value='';
    guessField.focus();
}

guesses.style.backgroundColor="pink";   
}


// 显示重新开始控件

    // 创建小孩的做法
// var resetButtonp=document.querySelector("div.resultParas p :last-child");
// console.log(resetButtonp);
// resetButtonp.style.display="block";
guessSubmit.addEventListener('click',checkGuess);
// 生成重新开始按钮
function setGameOver(){
    // 禁用文本框输入
guessField.disabled=true;
// 禁用确定按钮
guessSubmit.disabled=true;
// 创建button元素 button为html按钮的签名
resetButton=document.createElement('button');
// 为新生成的元素resetButton设置文本内容
resetButton.textContent='开始游戏';
// 将resetButton作为body的小孩加入页面
document.body.appendChild(resetButton);
// 为resetButton设置单击事件侦听器
resetButton.addEventListener('click',resetGame);
}
//重置游戏
function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for(var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }