// To check palindrome, ABCBA, compare chars from both ends. If left pointer index >= right pointer index, its palindrome

const userInput = document.getElementById("userInput");

function check() {
  const value = userInput.value;

  let left = 0;
  let right = value.length - 1;
  while (left < right) {
    if (value[left] != value[right]) {
      alert("NAH");
      return;
    }

    left++;
    right--;
  }
  alert("PALINDROME!");
}
