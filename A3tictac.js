let boxes = document.querySelectorAll(".box");
let rest = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;
//let arr = ["aplle","me","u"];

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
    [2,5,8],
    
];

const resetgame = () =>{
    turnO = true;
    count = 0;
    enable();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = winner();
        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw = () =>{
    msg.innerText = `Game was a Draw.`
    msgcontainer.classList.remove("hide");
    disabledbox();
}

const disabledbox =() =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const enable = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratualation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledbox();

}
const winner = () => {
     for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;

         if (pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val)
                showWinner(pos1val);
            }
         }
     }
}

newbtn.addEventListener("click",resetgame );
rest.addEventListener("click",resetgame)
