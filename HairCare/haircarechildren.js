



var i=1;

function nextoil()
{
	document.getElementById("one").src="images\\Children\\Oils\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}

function prevoil()
{
	i--;
	document.getElementById("one").src="images\\Children\\Oils\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nextshampoo()
{
	document.getElementById("two").src="images\\Children\\Shampoos\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevshampoo()
{
	i--;
	document.getElementById("two").src="images\\Children\\Shampoos\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

function nexthaircream()
{
	document.getElementById("three").src="images\\Children\\Haircreams\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevhaircream()
{
	i--;
	document.getElementById("three").src="images\\Children\\Haircreams\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}
function nexthairserum()
{
	document.getElementById("four").src="images\\Children\\Serums\\"+i+".jpg";
	i++;
	if(i>=6)
		{
			i=1;
		}
}
function prevhairserum()
{
	i--;
	document.getElementById("four").src="images\\Children\\Serums\\"+i+".jpg";
	
	if(i<=1)
		{
			i=6;
		}
}

