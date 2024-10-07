let gameSeq = [];
let uesrSeq = [];

let started = false;
let level = 0;

let btns = ["red","green","purple","orange"]

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;

        levelup()
    }
})

function btnflash(btn){
    btn.classList.add("flash")
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 100);
}
function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(() => {
        btn.classList.remove("userflash")
    }, 100);
}

function levelup(){
    uesrSeq = [];
    level++;
    h2.innerText = `Leve ${level}`

    /// random btn chose

    let btnrandom = Math.floor(Math.random()*4)
    let randomcolor = btns[btnrandom];
    let ranBtn = document.querySelector(`.${randomcolor}`)
    gameSeq.push(randomcolor)
    btnflash(ranBtn);
}

function checkAns(idx){
    if(gameSeq[idx] == uesrSeq[idx]){
        if(uesrSeq.length == gameSeq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML =`Game over! Your score was <b>${level}</b> <br> Press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "black"
        },150)
        reset();
    }
}

function btnpress(){
    let btn = this;
    userflash(btn)

    userColor = btn.getAttribute("id")
    uesrSeq.push(userColor);

    checkAns(uesrSeq.length-1)
}

let allBtn = document.querySelectorAll(".btn")
for(btn of allBtn){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started = false;
    gameSeq = [];
    uesrSeq = [];
    level = 0;
}