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

function bar() {
  console.log('bar');
}

function onBarClick() {
  console.log('button bar clicked');
  bar();
  alert('Thank you for clicking the button bar');
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#bar').addEventListener('click', onBarClick);
});
