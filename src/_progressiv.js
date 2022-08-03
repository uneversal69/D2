function progress()
{
    let i=0;
    let width= document.getElementById('progressBar').parentNode.clientWidth;
    let id=setInterval(grow, 20)
    let lastRefreshTs = (new Date()).getTime()
        
function grow()
const currentTs = (new Date()).getTime();
if( currentTs - lastRefreshTs >= 1 )
{
 if(i<width)
{i+=1;
if(!document.getElementById('progressBar').setAttribute("style","width: "+i+"px;"))
document.getElementById('progressBar').style.width = i;}
else
{alert('готово')
clearInterval(id);
}}}
progress();