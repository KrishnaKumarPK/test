//Write a function called deepClone which takes an object and creates a copy of it.
//For e.g. deepClone({ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }) -> { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }

function deepClone(obj) {
	console.log(JSON.parse(JSON.stringify(obj)))
}

const obj = { name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" } }
deepClone(obj)


//Write a function called areAnagrams which takes two string arguments and checks whether they are anagrams.
//For e.g. areAnagrams('fried', 'fired') -> true

function areAnagrams(str1, str2) {
  let newStr1 = str1.split("").sort().join("");
  let newStr2 = str2.split("").sort().join("");
  if (newStr1 === newStr2) {
  	console.log("true")
  } else {
  	console.log("false")
  }
}

areAnagrams('fsrddied', 'fired')
