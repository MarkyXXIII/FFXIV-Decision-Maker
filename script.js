
var decisionButton = document.getElementById('decisionButton');
var decisionOutput = document.getElementById('decisionOutput');

function generateRandomNumber(num) { 
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    signInfo: ['Ynbulea Jutah', 'Yvraine Silverstar', 'Petrine Lethe', 'Pant Monkey'],
    fortuneOutput: ['Level 80', 'Level 50/60/70', 'Levelling', 'Trials', 'Main Scenario', 'Guildhest', '24-man Alliance Raid', '8-man Raid'],
    advice: ['Paladin', 'Dark Knight', 'Red Mage', 'Samurai', 'White Mage']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'signInfo':
        personalWisdom.push(`You should party up with ${collectiveWisdom[prop][optionIdx]},`)
        break
      case 'fortuneOutput':
        personalWisdom.push(`and do the ${collectiveWisdom[prop][optionIdx]} roulette `)
        break
      case 'advice':
        personalWisdom.push(`as a ${collectiveWisdom[prop][optionIdx]}.`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    return formatted;
    //console.log(formatted);
  }
    //formatWisdom(personalWisdom)

decisionButton.onclick = function () {
  document.getElementById("decisionOutput").innerHTML=formatWisdom(personalWisdom);
  return false;
}