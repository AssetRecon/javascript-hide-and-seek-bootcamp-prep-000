function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('#nested .target');
}


var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li');
function increaseRankBy(n) {
  for (let i = 0; i < ranks.length; i++ ) {
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}


function deepestChild() {
  
}


