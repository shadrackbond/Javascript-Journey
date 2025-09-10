let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
//you need to fixup the largeCountries array so that
//china and pakistan are added back into their respective places
// use push() & pop() and their counterparts unshift() and shift()

largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
