function isPalindrome(input){
    const lowerCaseStr = input.toLowerCase();
    const cleanedStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
const userInput = prompt("Enter a word or phrase to check if it's a palindrome:");

if (isPalindrome(userInput)) {
    alert(`"${userInput}" is a palindrome!`);
}
else {
    alert(`"${userInput}" is not a palindrome.`);
}