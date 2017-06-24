


var i=1;

function nextmencream()
{
	document.getElementById("one").src="images\\Menu\\Creams\\Men Creams\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevmencream()
{
	i--;
	document.getElementById("one").src="images\\Menu\\Creams\\Men Creams\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextwomencream()
{
	document.getElementById("two").src="images\\Menu\\Creams\\Women Creams\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevwomencream()
{
	i--;
	document.getElementById("two").src="images\\Menu\\Creams\\Women Creams\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

function nextchildrencream()
{
	document.getElementById("three").src="images\\Menu\\Creams\\Children Creams\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevchildrencream()
{
	i--;
	document.getElementById("three").src="images\\Menu\\Creams\\Children Creams\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}


