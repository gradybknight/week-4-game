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
        CounterAttackPower=10,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"cow.jpg",
        index:0
    };
    
    var charTwo = {
        name: "donkey",
        HealthPower: 80,
        AttackPower:15,
        CounterAttackPower=7,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName: "donkey.jpg",
        index:1
    };
    
    var charThree = {
        name: "chicken",
        HealthPower: 40,
        AttackPower:5,
        CounterAttackPower=30,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"chicken.jpg",
        index:2
    };
    
    var charFour = {
        name: "pig",
        HealthPower: 250,
        AttackPower:9,
        CounterAttackPower=19,
        IncreaseAttackPower: function(){
            AttackPower=AttackPower+CounterAttackPower;
        },
        imageName:"pig.jpg",
        index:3
    };
    var allCharacters=[charOne, charTwo, charThree, charFour];
    var usersChoice="";
    var enemiesArray=[];
}

// assign character to usersChoice on click of icon. index value of user's chosen character is passed
function AssignCharactersToGroups(indexValue){
    usersChoice = allCharacters[indexValue];
    allCharacters.slice(indexValue,1);
    for (var i=0; i<allCharacters.length;i++){
        enemiesArray[i]=allCharacters[i];
    }
    // Move user character to user div
    // user character --> user div

    // move other characters to enemies div
    // for each in enemies array --> enemies div
    // update GUI
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