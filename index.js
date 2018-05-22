function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
const target = document.querySelector('#nested.target');
  console.log(target)
}

nestedTarget()