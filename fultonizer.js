var url = prompt("Please specify a URL to use for the bookmarklet");
//displays bookmarklet code
prompt("Here is your bookmarklet code!","javascript:void%20function(){for(var%20e=document.getElementsByTagName(%22img%22),t=0,i=e.length;i%3Et;t++)e[t].src=%22" + url + "%22}();");
