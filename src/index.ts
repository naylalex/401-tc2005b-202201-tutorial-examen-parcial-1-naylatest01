import './styles.css'
import isPalindrome from './checker';

function buttonSubmitClick() {
  console.log('Button sumbmit click');
  const inputText = <HTMLInputElement>document.getElementById('inputText');
  let bPalindrome = null;
  if (inputText) {
    bPalindrome = isPalindrome(inputText.value);
    console.log('Result:', bPalindrome);  
  }
  const divResult = <HTMLDivElement>document.getElementById("divResult");
  if (divResult) {
    console.log('Writing results with HTMLDivElement!');
    if (bPalindrome) {
      divResult.innerText = "The word is palindrome."
      divResult.className = "palindrome";
    } else {
      divResult.innerText = "The word is not palindrome!"
      divResult.className = "notPalindrome";
    }
  }
}

const btn = document.querySelector('button');
if (btn) {
  console.log('attaching listener');
  btn.addEventListener('click', buttonSubmitClick);
}