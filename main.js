
var i=0, text;
  text = " Hi, I'm an Appa! "

function typing() {
  if(i<text.length){
  document.getElementById("text").innerHTML += text.charAt(i); i++;
    setTimeout(typing,150);
      }
    }
typing();



