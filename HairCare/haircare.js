var imgs;
var i=0;
imgs=["image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg"];
function next()
{
	document.getElementById('slider').src=img[i];
	i++;
	if(i>=imgs.length)
		{
			i=0;
		}
}
function prev()
{
	i--;
	document.getElementById('slider').src=imgs[i];
	if(i<=0)
		{
			i=imgs.length-1;
		}
}