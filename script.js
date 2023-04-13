// complete the given function

function palindrome(str){
	const length = str.length;

	for(let i=0; i<length/2;i++) {
		if(str[i] !== str[length-1-i]) {
			return false;
		}
	}
	return true;
}

const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);
module.exports = palindrome
