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

$(function() {
    ResetGame();
    init();
    $("#attackEnemy").on("click",AttackEnemy);
});

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

function init()
{
    for (var i=0; i<allCharacters.length; i++){
        var characterTile = $("<div>")
            .attr("id", allCharacters[i].name)
            .attr("index", i)
            .html('<img src = ./assets/images/' + allCharacters[i].imageName + ' width = 150px">');
        // var divString = allCharacters[i].currentLocation;
        $("#notChosenCharacterDiv").append(characterTile);
        $("#" + allCharacters[i].name).off('click').on('click',function(){
                MoveAllTilesToTheirDivs($(this).attr('id'));
        });
    }
    gameStatus = "started";
}

function MoveAllTilesToTheirDivs(characterClicked){
    console.log('char ' + characterClicked + ' clicked.');
    if (gameStatus == "started"){
        for (var i=0; i<allCharacters.length;i++){
            if (characterClicked == allCharacters[i].name) {
                usersChoice=allCharacters[i].name;
                allCharacters[i].currentLocation="#usersCharacterDiv";
            } else {
                enemiesArray.push(allCharacters[i]);
                allCharacters[i].currentLocation="#enemyCharacterDiv";
            }
        }
        gameStatus="tileChosen";
    } else if (gameStatus == "tileChosen"){
        if (characterClicked!=usersChoice){
            enemyToFight=characterClicked;
            enemyToFight.currentLocation="#enemyDefender";
            //enemiesArray = RemoveCharacterFromArray(enemyToFight,enemiesArray);
            gameStatus="enemyChosen"
        }
    } else if (gameStatus=="enemyChosen"){
        
    }
    
    for (var i=0; i<allCharacters.length; i++){
        //console.log(allCharacters[i].name);
        var c = $("#" + allCharacters[i].name); 
        //console.log(c);
        $(allCharacters[i].currentLocation).append(c);
    }
    $("#notChosenCharacterDiv").empty();
}

function AttackEnemy(){

}