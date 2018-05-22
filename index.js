function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('#nested .target');
}


var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
function increaseRankBy(n) {
  for (let i = 0; i < ranks.length; i++ ) {
   parseInt(ranks[i].innerHTML) + n
  }
}
