


var i=1;

function nextmenserum()
{
	document.getElementById("one").src="images\\Menu\\Serums\\Men Serums\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevmenserum()
{
	i--;
	document.getElementById("one").src="images\\Menu\\Serums\\Men Serums\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextwomenserum()
{
	document.getElementById("two").src="images\\Menu\\Serums\\Women Serums\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevwomenserum()
{
	i--;
	document.getElementById("two").src="images\\Menu\\Serums\\Women Serums\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

function nextchildrenserum()
{
	document.getElementById("three").src="images\\Menu\\Serums\\Children Serums\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevchildrenserum()
{
	i--;
	document.getElementById("three").src="images\\Menu\\Serums\\Children Serums\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}


