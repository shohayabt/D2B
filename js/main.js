const submit = document.getElementById('submit');
const result = document.getElementById('result');
function binary(e) {
  e.preventDefault();
  const num = document.getElementById('number').value;
  console.log(typeof num);
  if (num === '' || num <= 0) {
    document.getElementById('error-message').innerHTML = "Please enter a valid number **"
  }else {
    result.style.visibility = 'visible';
    document.getElementById('error-message').style.display = "none";
    let binary = Number(num).toString(2);
    result.innerHTML = binary;
  }
}
submit.addEventListener('click', binary);
