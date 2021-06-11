const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentance => {
    let tutorialArray = sentance.split(" ")
    return tutorialArray.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
  })}


// FROM ZOOM WITH ANDY
// const titleCased = () => {
//   //tutorials = an array of sentences
//   let mappedTutorials = tutorials.map(sentence => {
//     // .split splits the sentence into an array of words which we name tutorialArray
//     let tutorialArray = sentence.split(" ")
//     // the .map below capitalizes the first letter of each word in the word array and joins them back into a string
//     let capSentence = tutorialArray.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
//     return capSentence
//   })
//   return mappedTutorials
//   // cap.map(first => first[0].toUpperCase() + first.substring(1)).join(" ")
//   //   return tutorials
// }