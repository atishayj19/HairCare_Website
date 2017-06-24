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

function nextmenoil()
{
	document.getElementById("one").src="images\\Menu\\Oils\\Men Oils\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevmenoil()
{
	i--;
	document.getElementById("one").src="images\\Menu\\Oils\\Men Oils\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextwomenoil()
{
	document.getElementById("two").src="images\\Menu\\Oils\\Women Oils\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevwomenoil()
{
	i--;
	document.getElementById("two").src="images\\Menu\\Oils\\Women Oils\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextchildrenoil()
{
	document.getElementById("three").src="images\\Menu\\Oils\\Children Oils\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevchildrenoil()
{
	i--;
	document.getElementById("three").src="images\\Menu\\Oils\\Children Oils\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}


