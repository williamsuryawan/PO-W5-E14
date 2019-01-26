function changeVocals (str) {
  //code di sini
  var newVocals = str.split("")
  // console.log(newVocals)
  for (var i=0; i<newVocals.length; i++) {
    if (newVocals[i] == "a"){
      newVocals[i] = "b"
    } else if (newVocals[i] == "e") {
      newVocals[i] = "f"
    } else if (newVocals[i] == "i") {
      newVocals[i] = "j"
    } else if (newVocals[i] == "o") {
      newVocals[i] = "p"
    } else if (newVocals[i] == "u") {
      newVocals[i] = "v"
    }
  }
  return newVocals
}

function reverseWord (str) {
  //code di sini
  var revWord =""
  for (var i =str.length-1; i>=0; i--) {
    revWord = revWord + str[i]
  }
  //var vocal = changeVocals(str)
  // console.log(newWord)
  return revWord
}

function setLowerUpperCase (str) {
  //code di sini
  var lowupCase =""
  for (var j=0; j<str.length; j++){
    if(str[j]===str[j].toUpperCase()) {
      lowupCase += str[j].toLowerCase()
    } else {
      lowupCase += str[j].toUpperCase()
    }
  }
  return lowupCase
}

function removeSpaces (str) {
  //code di sini
  return str.replace(/\s/g, "")
}

function passwordGenerator (name) {
  //code di sini
  if (name.length >= 5) {
  var vocal = changeVocals (name)
  var revWord = reverseWord(vocal)
  var lowupCase = setLowerUpperCase(revWord)
  var noSpace = removeSpaces(lowupCase)
  return noSpace
  } else {
    return "Minimal karakter yang diinputkan adalah 5 karakter"
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'