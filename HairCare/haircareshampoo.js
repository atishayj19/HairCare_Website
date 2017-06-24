


var i=1;

function nextmenshampoo()
{
	document.getElementById("one").src="images\\Menu\\Shampoos\\Men Shampoos\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevmenshampoo()
{
	i--;
	document.getElementById("one").src="images\\Menu\\Shampoos\\Men Shampoos\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextwomenshampoo()
{
	document.getElementById("two").src="images\\Menu\\Shampoos\\Women Shampoos\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevwomenshampoo()
{
	i--;
	document.getElementById("two").src="images\\Menu\\Shampoos\\Women Shampoos\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextchildrenshampoo()
{
	document.getElementById("three").src="images\\Menu\\Shampoos\\Children Shampoos\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevchildrenshampoo()
{
	i--;
	document.getElementById("three").src="images\\Menu\\Shampoos\\Children Shampoos\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}


