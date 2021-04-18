let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
var runnerAge = 19;
console.log(raceNumber);
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true){
  console.log(`The race will start at 9:30 am. Your race number is ${raceNumber}!`);
}
else if (runnerAge > 18 && registeredEarly === false){
  console.log(`Late adults run at 11:00 am. Your race number is ${raceNumber}!`);
}
else if (runnerAge < 18){
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}`);
}
else{
  console.log('Check the registration desk!');
}