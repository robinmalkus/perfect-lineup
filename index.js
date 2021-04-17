//for each lineup check if each rule has been met.
//validatLineup function return a true if all lineup meets all rules. 
const validateLineup = (lineup) =>{
    alllineupsgood = true;
    lineup.forEach(lineup => {
    //call function to chech total salary
    console.log(lineup.salary);
    intSalary = parseInt(lineup.salary);
    isSalaryGood = addCheckSalary(intSalary);
    //call function to check position
    isPositionGood = checkOf(lineup.postion);
    //call function to check single team.
    isSingleTeam = team(lineup.teamId);
    //call function to check single game
    isSingleGame = game(lineup.gameId);
    //call function to check player from each position.
    isPlayerEach = eachteam(lineup.id);
    //If any return false return false
    alllineupsgood = alllineupsgood && isSalaryGood
//If for loop is done return true.
});
 return alllineupsgood;
}

totalSalary = 0;
 
//Total equal to or less then $45,000 in a lineup
function addCheckSalary(salary) {
  //add salary total salary
  console.log(salary);
  console.log(totalSalary);
  totalSalary = totalSalary + salary;
  console.log(totalSalary);
  //return true of total salary is less than 45K else return false
  if (totalSalary < 45000){
      return true;
  } else {
    return false;
  }

}


//Lineup equal to 3 plays position of 'OF' 
totalOf = 0;
//Total lineup equal to 3 player position of 'OF'
function checkOf(position) {
    return true;

}
    
//Line equal to or less then 2 players from a single team.  
totalSingleTeam = 0;
//Total 2 or less players.
function team(teamid) {  
return true;
}
//Lineup equal to or less then 3 plays from a single game
totalSingleGame = 0;
//Total equal or less 3 players
function game(gameid) {
return true;
}
//1 player from the 'P', 'C', '1B', '2B', '3B', 'SS'
totalEachTeam =0;
//Total one player per team
function eachteam(id) {
    return true;
}

//Return false when lineup total greater then 45000.
//Return a false if the lineup includes too few players from a single position.
//Return false if too many plays from a single team
//Return a false if lineup too many plays from a single game.
//Return a false if lineup does not include a player from a position.






    //Line equal to or less then 2 players from a single team, return true. 
    

//Total equal to or less then $45,000 in a lineup
//const validateLineup = (salary) => {
   // salary.map(function(value) {
   // console.log(amountSum)
    //if (amountSum => 45000) {
    // return true
  // else {
     //return false

module.exports = validateLineup