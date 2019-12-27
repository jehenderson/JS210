function hasProperty(object, property) {
  return Object.keys(object).includes(property);
}

function incrementProperty(object, attr) {
  if (hasProperty(object, attr)) {
    object[attr] += 1;
  }
  else {
    object[attr] = 1;
  }
}

function copyProperties(source, destination) {
  for (key in source) {
    destination[key] = source[key];
  }
  return Object.keys(destination);
}

function wordCount(str) {
  var properties = new Object();
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    if(properties[words[i]]){
        properties[words[i]] += 1;
    }
    else {
      properties[words[i]] = 0;
    }
  }
  return properties;
}
// var pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };
//
// var wins = {
//   steve: 3,
//   susie: 4,
// }
//
// var hal = {
//   model: 9000,
//   enabled: true,
// }
//
// var sal = {};
// console.log(copyProperties(hal, sal));
// console.log(sal);
//
// console.log(hasProperty(pets, 'dog'));
// console.log(hasProperty(pets, 'lizard'));
// console.log(hasProperty(pets, 'mice'));
//
// console.log(incrementProperty(wins, 'susie'));
// console.log(wins);
// console.log(incrementProperty(wins, 'lucy'));
// console.log(wins);

console.log(wordCount('box car cat bag box'));
