var r,score=0,grade=4,LastHumanChoice;
var lastWinner="noOne",lastComputerChoice="rock";
function rock(){
    document.getElementById("myChoice").innerHTML = "<img src=\"images/rock.jpg\"/>";
    judge("rock");
    LastHumanChoice = "rock";
}

function scissors(){
    document.getElementById("myChoice").innerHTML = "<img src=\"images/scissors.jpg\"/>";
    judge("scissors");
    LastHumanChoice = "scissors";
}
function paper(){
    document.getElementById("myChoice").innerHTML = "<img src=\"images/paper.jpg\"/>";
    judge("paper");
    LastHumanChoice = "paper";
}
function judge(myChoice){
    r = 3*Math.random();
    var computerResult;
    if(grade==1){
        computerResult = onlyRocker();
    }
    else if(grade==2){
        computerResult = learnFromHuman();
    }
    else if (grade==3){
        computerResult = winnerAgain();
        lastComputerChoice = computerResult;
    }
    else if (grade==4){
        computerResult = loseChange();
        lastComputerChoice = computerResult;
    }
    else{
        computerResult = computerChoice();
    }
    if (myChoice=="rock"){
        if(computerResult=="rock"){
            lastWinner = "noOne";
        }
        else if(computerResult=="scissors"){
            lastWinner = "human";
            score+=1;

        }
        else if(computerResult=="paper"){
            lastWinner = "com";
            score-=1;

        }
    }
    else if (myChoice=="scissors"){
        if(computerResult=="rock"){
            score-=1;
            lastWinner = "com";
        }
        else if(computerResult=="scissors"){
            lastWinner = "noOne";
        }
        else if(computerResult=="paper"){
            score+=1;
            lastWinner = "hunman";
        }
    }
    else{
        if(computerResult=="rock"){
            score+=1;
            lastWinner = "com";
        }
        else if(computerResult=="scissors"){
            score-=1;
            lastWinner = "human";
        }
        else if(computerResult=="paper"){
            lastWinner = "noOne";
        }
    }
    if (score>=5){
        score=0;
        grade+=1;

    }
    document.getElementById("result").innerHTML="第"+grade+"关,积分："+score;
    if (score>=10){
        document.getElementById("result").innerHTML="NB,总通关了"+score;
    }
}
function go() {
}
function computerChoice(){
    if (r<1){
        document.getElementById("computerChoice").innerHTML = "<img src='images/rock.jpg'>";
        return "rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML = "<img src='images/scissors.jpg'>";
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML = "<img src='images/paper.jpg'>";
        return "paper";
    }
}

function onlyRocker(){
    document.getElementById("computerName").innerHTML = "电脑大锤哥";
    document.getElementById("computerChoice").innerHTML = "<img src='images/rock.jpg'>";
    return "rock";
}

function learnFromHuman(){
    document.getElementById("computerName").innerHTML = "模仿帝";
    document.getElementById("computerChoice").innerHTML = "<img src='images/"+LastHumanChoice+".jpg'>";
    return LastHumanChoice;
}

function winnerAgain(){
    document.getElementById("computerName").innerHTML = "赢了还出";
    if (lastWinner=="com"){
        document.getElementById("computerChoice").innerHTML = "<img src='images/"+lastComputerChoice+".jpg'>";
        return lastComputerChoice;
    }
    var temp = computerChoice()
    document.getElementById("computerChoice").innerHTML = "<img src='images/"+ temp +".jpg'>";
    return temp;
}

function loseChange(){
    document.getElementById("computerName").innerHTML = "输了就换";
    if (lastWinner=="human"){
        var temp = getResultExclude(lastComputerChoice);
        document.getElementById("computerChoice").innerHTML = "<img src='images/"+lastComputerChoice+".jpg'>";
        return temp;
    }
    temp = computerChoice()
    document.getElementById("computerChoice").innerHTML = "<img src='images/"+ temp +".jpg'>";
    return temp;
}

function getResultExclude(exclusion){
    var temp = computerChoice();
    if (temp==exclusion){
        return getResultExclude(exclusion)
    }
    else{
        return temp;
    }
}