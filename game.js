var gptrn=[];
var ar=["red","blue","green","yellow"];
var ucp=[];
var level=0;
var st=false;

function ps(nm)
{
  var audio = new Audio("sounds/" + nm + ".mp3");
  audio.play();
}
function sO(){
  level=0;
  gptrn=[];
  st=false;
}
function ca(cl)
{
  if(ucp[cl]===gptrn[cl])
  {
    if(ucp.length===gptrn.length)
    {
      setTimeout(function(){
        nxtsq();
      },1000);
    }
  }
    else{
      ps("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
      setTimeout(function(){
        $("body").removeClass("game-over");
      },200);
      sO();
    }
}
function animatePress(cc)
{
  $("#"+cc).addClass("pressed");
  setTimeout(function(){
    $("#"+cc).removeClass("pressed");
  },100);
}
function nxtsq()
{
  ucp=[];
  level++;
  $("h1").text("Level "+level);
  var rn=Math.floor(Math.random()*4);
  var rcc=ar[rn];
  gptrn.push(rcc);
  $("#"+rcc).fadeOut(100).fadeIn(100);
  ps(rcc);
  animatePress(rcc);
}

$(".btn").click(function(){
  var ucc=$(this).attr("id");
  ucp.push(ucc);
  ps(ucc);
  animatePress(ucc);
  ca(ucp.length-1);
});

$(document).keypress(function(){
  if(!st){
  nxtsq();
  st=true;
}
});
