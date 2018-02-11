// GAME INITIALIZATION
// initialize each character with characteristics and initialize general variables
//GLOBAL VARIABLES
var hasUserChosenCharacter;
var charOne;
var charTwo;
var charThree;
var charFour;
var usersChoice;
var allCharacters;
var enemiesArray;



function ResetGame(){
    var hasUserChosenCharacter = false;

    var charOne = {
        name: "cow",
        HealthPower: 100,
        AttackPower:10,
        CounterAttackPower:10,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"cow.jpg",
        index:0,
        currentLocation:"notChosen"
    };
    
    var charTwo = {
        name: "donkey",
        HealthPower: 80,
        AttackPower:15,
        CounterAttackPower:7,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName: "donkey.jpg",
        index:1,
        currentLocation:"notChosen"
    };
    
    var charThree = {
        name: "chicken",
        HealthPower: 40,
        AttackPower:5,
        CounterAttackPower:30,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"chicken.jpg",
        index:2,
        currentLocation:"notChosen"
    };
    
    var charFour = {
        name: "pig",
        HealthPower: 250,
        AttackPower:9,
        CounterAttackPower:19,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"pig.jpg",
        index:3,
        currentLocation:"notChosen"
    };
    allCharacters=[charOne, charTwo, charThree, charFour];
    usersChoice="";
    enemiesArray=[];
    AssignAllCharactersToStartingDiv();

    $('#cow').click(MoveCow);
    function MoveCow(){
        console.log($('#cow').attr("currentLocation"));
        var chosenCharacterIndex = $('#cow').attr("index");
        AssignCharactersToGroups(chosenCharacterIndex);
    }
    $('#chicken').click(MoveChicken);
    function MoveChicken(){
        console.log($('#chicken').attr("currentLocation"));
        var chosenCharacterIndex = $('#chicken').attr("index");
        AssignCharactersToGroups(chosenCharacterIndex);
    }
    $('#donkey').click(MoveDonkey);
    function MoveDonkey(){
        console.log($('#donkey').attr("currentLocation"));
        var chosenCharacterIndex = $('#donkey').attr("index");
        AssignCharactersToGroups(chosenCharacterIndex);
    }
    $('#pig').click(MovePig);
    function MovePig(){
        console.log($('#pig').attr("currentLocation"));
        var chosenCharacterIndex = $('#pig').attr("index");
        AssignCharactersToGroups(chosenCharacterIndex);
    }
}

function AssignAllCharactersToStartingDiv(){
    for (var i= 0; i<allCharacters.length; i++){
        var characterTile = $("<div>");
        characterTile.attr("id", allCharacters[i].name);
        characterTile.attr("index", i);
        characterTile.attr("currentLocation", "notChosen");
        characterTile.html('<img src = ./assets/images/' + allCharacters[i].imageName + ' width = 150px">');
        $("#notChosenCharacterDiv").append(characterTile);
    }
}

// assign character to usersChoice on click of icon. index value of user's chosen character is passed
function AssignCharactersToGroups(indexValue){
    usersChoice = allCharacters[indexValue];
    for (var i=0; i<allCharacters.length;i++){
        if (allCharacters[i]!== usersChoice){
            enemiesArray.push(allCharacters[i]);
        }
    }
    // Move user character to user div
    // user character --> user div
    var characterTile = $("<div>");
    characterTile.attr("id", usersChoice.name);
    characterTile.attr("index", usersChoice.index);
    characterTile.attr("currentLocation", "usersCharacterDiv");
    characterTile.html('<img src = ./assets/images/' + usersChoice.imageName + ' width = 150px">');
    $("#usersCharacterDiv").append(characterTile);
    // move other characters to enemies div
    for (var i = 0; i<enemiesArray.length;i++){
        var characterTile = $("<div>");
        characterTile.attr("id", enemiesArray[i].name);
        characterTile.attr("index", enemiesArray[i].index);
        characterTile.attr("currentLocation", "enemyCharacterDiv");
        characterTile.html('<img src = ./assets/images/' + enemiesArray[i].imageName + ' width = 150px">');
        $("#enemyCharacterDiv").append(characterTile);
    }
    // clear not chosen div
    $('#notChosenCharacterDiv').empty();
}


function PlayRoundWhereEnemyIsClicked(enemy){
    usersChoice.HealthPower -= enemy.AttackPower;
    enemy.HealthPower -= usersChoice.AttackPower;
    usersChoice.AttackPower += usersChoice.CounterAttackPower;
}

function IsCharacterDead(theCharacter){
    if (theCharacter.HealthPower<=0){
        return true;
    } else {
        return false;
    }
}

function EvaluateResultOfRound(){
    if (IsCharacterDead(usersChoice)) {
        console.log("game over. user lost");
    } else if (IsCharacterDead(enemiesArray[indexChosen])) {
        console.log("enemy died");
    }
}

// update GUI
function RemoveCharacterFromDiv(theCharacter, theDiv){

}

// GAME TERMINIATION
// change winning text
function UpdateStatusTextWithMessage(theString) {
    
};
// draw button to restart
function DrawRestartButton(){

}

function PlayTheGame() {
    ResetGame();
    if (!hasUserChosenCharacter) {
        // on click
        AssignCharactersToGroups(0); // !! need to get index value of character
    }
};




ResetGame();