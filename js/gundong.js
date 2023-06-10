var oDiv = document.getElementById("div1");
    var oUl = document.getElementById("ul");
    var oLi = document.getElementsByClassName("li");
    var timer = null;
    var iSpeed = 2;
    oUl.innerHTML +=oUl.innerHTML;
    oUl.style.width = oLi.length*oLi[0].offsetWidth + "px";
    function fnMove()
    {
        if (oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            oUl.style.left = 0;
        }
        else if (oUl.offsetLeft>=0)
        {
            oUl.style.left = -oUl.offsetWidth/2 + "px";
        }
        oUl.style.left = oUl.offsetLeft +iSpeed + "px";
    }
    timer=setInterval(fnMove,60)
    oDiv.onmouseover = function()
    {
        clearInterval(timer);
    }
    oDiv.onmouseout = function()
    {
        timer=setInterval(fnMove,60);
    }