// playerName input
  var playerName = window.prompt("What is your robot's name?");
  var playerHealth = 100;
  var playerAttack= 10;

// Enemy stats
  var enemyName = "Roborto";
  var enemyHealth = 50;
  var enemyAttack = 12;



var fight = function() {
  // Alert that they are starting a round
    window.alert("Welcome to Robot Gladiators!");

  // subtract playerAttack from enemyHealth to assign a new value to enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;
  // log resulting message to know it worked
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  // subtract enemyAttack from playerHealth and use to update playerHealth variable
      playerHealth = playerHealth - enemyAttack;
  // log resulting message to know it worked
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      )
};


// execute fight function
fight();