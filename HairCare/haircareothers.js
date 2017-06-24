

var i=1;

function nextmenother()
{
	document.getElementById("one").src="images\\Menu\\Others\\Men Others\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevmenother()
{
	i--;
	document.getElementById("one").src="images\\Menu\\Others\\Men Others\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextwomenother()
{
	document.getElementById("two").src="images\\Menu\\Others\\Women Others\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevwomenother()
{
	i--;
	document.getElementById("two").src="images\\Menu\\Others\\Women Others\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextchildrenother()
{
	document.getElementById("three").src="images\\Menu\\Others\\Children Others\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevchildrenother()
{
	i--;
	document.getElementById("three").src="images\\Menu\\Others\\Children Others\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}


