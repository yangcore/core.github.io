"use strict";window.onload=function(){function e(){return t.scrollTop||document.documentElement.scrollTop}var t=document.body,n=document.getElementById("mnav"),o=document.getElementById("main-menu"),i=document.getElementById("process"),c=document.querySelectorAll(".img-ajax"),a=(document.getElementById("comments-count"),document.getElementById("gitcomment"),document.getElementById("back-to-top")),r=null;n.onclick=function(){"-1"!=o.getAttribute("class").indexOf("in")?o.setAttribute("class","collapse navbar-collapse"):o.setAttribute("class","collapse navbar-collapse in")};var l=!0;!function(e){if(1==/iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase())&&"mobile"!=function(e,t){var n=new RegExp("(?:&|/?)"+t+"=([^&$]+)").exec(e);return n?n[1]:""}(location.search,"from")){var t=document.body.clientWidth/4.5+"px";document.documentElement.style.fontSize=t,window.onresize=function(){var e=document.body.clientWidth;t=e/4.5+"px",document.documentElement.style.fontSize=t},l=!1}else document.documentElement.style.fontSize="610%"}();var u=function(){i&&(i.style.width=e()/(t.scrollHeight-window.innerHeight)*100+"%"),l&&e()>=300?a.removeAttribute("class","hide"):a.setAttribute("class","hide"),function(t){if(t){var n=t.length;if(n>0)for(var o=e()+window.innerHeight,i=0;i<n;i++)!function(e){var n=t[i],c=n.getBoundingClientRect().top+window.pageYOffset-document.documentElement.clientTop;if(o>=c&&n.getAttribute("data-src")&&n.getAttribute("data-src").length>0){if("img"===n.nodeName.toLowerCase())n.src=n.getAttribute("data-src"),n.style.display="block";else{var a=new Image;a.onload=function(){n.innerHTML=""},a.src=n.getAttribute("data-src"),n.style.backgroundImage="url("+n.getAttribute("data-src")+")"}n.removeAttribute("data-src")}}()}}(c)};u(),window.attachEvent?window.attachEvent("scroll",function(){clearTimeout(r),r=setTimeout(function(){u()},200)}):window.addEventListener&&window.addEventListener("scroll",function(){clearTimeout(r),r=setTimeout(function(){u()},200)}),a.onclick=function(){cancelAnimationFrame(r),r=requestAnimationFrame(function n(){var o=e();o>0?(t.scrollTop=document.documentElement.scrollTop=o-50,r=requestAnimationFrame(n)):cancelAnimationFrame(r)})}};