var r,score=0,grade=1,LastHumanChoice;
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
    else{
        computerResult = computerChoice();
    }
    if (myChoice=="rock"){
        if(computerResult=="rock"){
            ;
        }
        else if(computerResult=="scissors"){
            score+=1;
        }
        else if(computerResult=="paper"){
            score-=1;
        }
    }
    else if (myChoice=="scissors"){
        if(computerResult=="rock"){
            score-=1;
        }
        else if(computerResult=="scissors"){
            ;
        }
        else if(computerResult=="paper"){
            score+=1;
        }
    }
    else{
        if(computerResult=="rock"){
            score+=1;
        }
        else if(computerResult=="scissors"){
            score-=1;
        }
        else if(computerResult=="paper"){
            ;
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