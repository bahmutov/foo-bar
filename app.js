console.log('this is app.js');

function foo() {
  console.log('foo');
}

function onFooClick() {
  console.log('button foo clicked');
  foo();
  alert('Thank you for clicking the button foo');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#foo').addEventListener('click', onFooClick);
});

