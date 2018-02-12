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
    setGameStatus("initialize");

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
    allCharacters={"cow":cow,"donkey":donkey,"chicken":chicken,"pig:":pig};
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
    var s = allCharacters;
    for (var key in allCharacters){
        var characterTile = $("<div>")
            .attr("id", s[key].name)
            .html('<img src = ./assets/images/' + s[key].imageName + ' width = 150px">');
        // var divString = allCharacters[i].currentLocation;
        $("#notChosenCharacterDiv").append(characterTile);
        $("#" + s[key].name).off('click').on('click',function(){
                MoveAllTilesToTheirDivs($(this).attr('id'));
        });
    }
    setGameStatus("started");
}

function setGameStatus(status)
{
    gameStatus = status ;
    $("#gameStatus").html(status);
}

function MoveAllTilesToTheirDivs(characterClicked){
    console.log('char ' + characterClicked + ' clicked.');
    if (gameStatus == "started"){
        for (var key in allCharacters){
            if (characterClicked == allCharacters[key].name) {
                usersChoice=allCharacters[characterClicked];
                allCharacters[key].currentLocation="#usersCharacterDiv";
            } else {
                console.log(allCharacters[key]);
                enemiesArray.push(allCharacters[key]);
                allCharacters[key].currentLocation="#enemyCharacterDiv";
            }
        }
    
        for (var k in allCharacters){
            //console.log(allCharacters[i].name);
            var c = $("#" + allCharacters[k].name); 
            //console.log(c);
            $(allCharacters[k].currentLocation).append(c);
        }        
        setGameStatus("tileChosen");
    } else if (gameStatus == "tileChosen"){
        if (characterClicked!=usersChoice){
            enemyToFight=allCharacters[characterClicked];
            $("#enemyDefender").append($("#" + characterClicked));
            //enemiesArray = RemoveCharacterFromArray(enemyToFight,enemiesArray);
            setGameStatus("enemyChosen");
            $("#" + characterClicked).off('click').on('click',function(){
                AttackEnemy();
            });
        }
    } 
}

function AttackEnemy(){
    alert('lets fight !');
}

