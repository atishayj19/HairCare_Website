/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

*/



var i=1;

function nextoil()
{
	document.getElementById("one").src="images\\Men\\Oils\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevoil()
{
	i--;
	document.getElementById("one").src="images\\Men\\Oils\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextshampoo()
{
	document.getElementById("two").src="images\\Men\\Shampoos\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevshampoo()
{
	i--;
	document.getElementById("two").src="images\\Men\\Shampoos\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

function nexthairwax()
{
	document.getElementById("three").src="images\\Men\\Hairwaxs\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevhairwax()
{
	i--;
	document.getElementById("three").src="images\\Men\\Hairwaxs\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextserum()
{
	document.getElementById("four").src="images\\Men\\Serums\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevserum()
{
	i--;
	document.getElementById("four").src="images\\Men\\Serums\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

