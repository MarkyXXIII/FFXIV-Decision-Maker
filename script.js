
var decisionButton = document.getElementById('decisionButton');
var decisionOutput = document.getElementById('decisionOutput');

function generateRandomNumber(num) { 
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveDecision = {
    charName: ['Character A', 'Character B', 'Character C', 'Character D'],
    activity: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5', 'Activity 6', 'Activity 7', 'Activity 8'],
    role: ['Role I', 'Role II', 'Role III', 'Role IV',]
  }
  
  // Store the 'decision' in an array
  let personalDecision = []
  
  // Iterate over the object
  for(let prop in collectiveDecision) {
    let optionIdx = generateRandomNumber(collectiveDecision[prop].length)
  
    // use the object's properties to customize the message being added to personalDecision  
    switch(prop) {
      case 'charName':
        personalDecision.push(`You should team up with ${collectiveDecision[prop][optionIdx]},`)
        break
      case 'activity':
        personalDecision.push(`and complete ${collectiveDecision[prop][optionIdx]} `)
        break
      case 'role':
        personalDecision.push(`as ${collectiveDecision[prop][optionIdx]}.`)
        break
      default:
        personalDecision.push('There is not enough info.')
    }
  }
  
  function formatDecision(wisdom) {
    const formatted = personalDecision.join('\n')
    return formatted;
    //console.log(formatted);
  }
    //formatDecision(personalDecision)

decisionButton.onclick = function () {
  document.getElementById("decisionOutput").innerHTML=formatDecision(personalDecision);
  return false;
}