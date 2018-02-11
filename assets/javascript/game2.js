// GAME INITIALIZATION
// initialize each character with characteristics and initialize general variables
//GLOBAL VARIABLES
var gameStatus = "initialize";
// initialize, started, tileChosen, enemyChosen, userWon, userLost
var cow;
var donkey;
var chicken;
var pig;
var usersChoice;
var enemyToFight;
var allCharacters=[];
var enemiesArray=[];

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
    $("#cow").on("click", MoveAllTilesToTheirDivs("cow"));
    $("#donkey").on("click", MoveAllTilesToTheirDivs("donkey"));
    $("#chicken").on("click", MoveAllTilesToTheirDivs("chicken"));
    $("#pig").on("click", MoveAllTilesToTheirDivs("pig"));
    $("#attackEnemy").on("click",AttackEnemy);
};

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
    }
    
    for (var i=0; i<allCharacters.length; i++){
        var characterTile = $("<div>");
        characterTile.attr("id", allCharacters[i].name);
        characterTile.attr("index", i);
        characterTile.html('<img src = ./assets/images/' + allCharacters[i].imageName + ' width = 150px">');
        // var divString = allCharacters[i].currentLocation;
        $(allCharacters[i].currentLocation).append(characterTile);
    }
}

function AttackEnemy(){

}
ResetGame();
MoveAllTilesToTheirDivs("initialize");