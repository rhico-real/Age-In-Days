//challenge 1: age in days

function ageInDays(){
  var birthYear=prompt("What year were you born?");
  var today=new Date();
  var today_year=today.getFullYear();
  var ageindays=(today_year-birthYear)*365;
  var h1=document.createElement('h1');
  var textAnswer=document.createTextNode('You are '+ageindays+' days old');
  h1.setAttribute('id','ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(ageindays);
}

function reset(){
  document.getElementById('ageInDays').remove();
}
