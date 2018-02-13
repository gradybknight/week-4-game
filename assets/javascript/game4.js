// GAME INITIALIZATION
// initialize each character with characteristics and initialize general variables
//GLOBAL VARIABLES
var gameStatus = "initialize";
// initialize, started, tileChosen, enemyChosen, enemyDied, userWon, userLost
var cow;
var donkey;
var chicken;
var pig;
var usersChoice;
var enemyToFight;
var allCharacters=[];
var enemiesArray=[];
var isGameOver=false;
var isUserDead=false;
var isUserWinner=false;

function ResetGame(){
    gameStatus="initialize";

    cow = {
        name: "cow",
        HealthPower: 100,
        AttackPower:10,
        CounterAttackPower:10,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"cow.jpg",
        index:0,
        currentLocation:"#notChosenCharacterDiv",
        isAvailable:true
    };
    
    donkey = {
        name: "donkey",
        HealthPower: 80,
        AttackPower:15,
        CounterAttackPower:7,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName: "donkey.jpg",
        index:1,
        currentLocation:"#notChosenCharacterDiv",
        isAvailable:true
    };
    
    chicken = {
        name: "chicken",
        HealthPower: 40,
        AttackPower:5,
        CounterAttackPower:30,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"chicken.jpg",
        index:2,
        currentLocation:"#notChosenCharacterDiv",
        isAvailable:true
    };
    
    pig = {
        name: "pig",
        HealthPower: 250,
        AttackPower:9,
        CounterAttackPower:19,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"pig.jpg",
        index:3,
        currentLocation:"#notChosenCharacterDiv",
        isAvailable:true
    };
    allCharacters=[cow,donkey,chicken,pig];
    usersChoice="";
    enemiesArray=[];
}

window.onload = function() {
    ResetGame();
    MoveAllTilesToTheirDivs("initialize");
    for (var i=0;i<allCharacters.length;i++){
        var characterTile = $("<div>")
            .attr("id", allCharacters[i].name)
            .html('<img src = ./assets/images/' + allCharacters[i].imageName + ' width = 150px">');
        $("#notChosenCharacterDiv").append(characterTile);
        $("#" + allCharacters[i].name).off('click').on('click',function(){
                MoveAllTilesToTheirDivs($(this).attr('id'));
        });
    }
    $("#attackEnemy").on("click",PlayRoundWhereEnemyIsClicked);
    gameStatus="started";
};

function RemoveCharacterFromArray(theCharacter,theArray){
    var tempArray=[];
    for (var i=0;i<theArray.length;i++){
        if (theArray[i]!=theCharacter){
            tempArray.push(theArray[i]);
        }
    }
    theArray=[]
    for (var i=0; tempArray.length;i++){
        theArray.push(tempArray[i]);
    }
    return theArray;
}

function PlayRoundWhereEnemyIsClicked(){
    usersChoice.HealthPower -= enemyToFight.AttackPower;
    enemyToFight.HealthPower -= usersChoice.AttackPower;
    usersChoice.AttackPower += usersChoice.CounterAttackPower;
    if (usersChoice.HealthPower<0) {
        isGameOver=true;
        isUserDead=true;
        isUserWinner=false;
        $("#summaryOfAttackText").text("You're dead");
    }
    $("#summaryOfAttackText").text("You have health power: "+ usersChoice.HealthPower + ". " + enemyToFight.name + " has health power: "+ enemyToFight.HealthPower);
    if (enemyToFight.HealthPower<0){
        gameStatus="enemyDied";
        $("#summaryOfAttackText").text("Enemy died");
    }
    

    if (usersChoice.HealthPower>=0 && enemiesArray.length==0){
        isGameOver=true;
        isUserDead=false;
        isUserWinner=true;
        $("#summaryOfAttackText").text("You're a winner");
    } 


}



function MoveAllTilesToTheirDivs(characterClicked){
    if (gameStatus == "started"){
        for (var i=0; i<allCharacters.length;i++){
            if (characterClicked == allCharacters[i].name) {
                usersChoice=allCharacters[i];
                allCharacters[i].currentLocation="#usersCharacterDiv";
            } else {
                enemiesArray.push(allCharacters[i]);
                allCharacters[i].currentLocation="#enemyCharacterDiv";
            }
        }
        gameStatus="tileChosen";
    } else if (gameStatus == "tileChosen"){
        if (characterClicked!=usersChoice.name){
            var whereInAllArray="";
            for (var i=0;i<allCharacters.length;i++){
                if (allCharacters[i].name==characterClicked){
                    whereInAllArray=i;
                }
            }
            enemyToFight=allCharacters[whereInAllArray];
            enemyToFight.currentLocation="#enemyDefender";
            // enemiesArray = RemoveCharacterFromArray(enemyToFight,enemiesArray);
            gameStatus="enemyChosen"
        }
    } else if (gameStatus=="enemyDied"){
        $("#enemyDefender").empty();
        gameStatus="tileChosen";
    }

    if (gameStatus=="initialize"){
        gameStatus="started";
    }
    // if (gameStatus!="enemyChosen"){
        for (var i=0;i<allCharacters.length;i++){
            var divName=$("#" + allCharacters[i].name);
            $(allCharacters[i].currentLocation).append(divName);
        }
    // }
    console.log(allCharacters);
}

