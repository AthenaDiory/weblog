/*跨浏览器绑定事件*/
    function addEvent(obj,type,fn){
        if(obj.addEventListener){        //W3C
            obj.addEventListener(type,fn,false);
        }else if(obj.attachEvent){       //IE
            obj.attachEvent('on'+type,fn);
        }
    }
/*跨浏览器移除事件*/
    function removeEvent(obj,type,fn){
        if(obj.removeEventListener){
            obj.removeEventListener(type,fn,false);
        }//w3c
        else if(obj.detachEvent){
            obj.detachEvent('on'+type,fn);
        }//IE浏览器
    }

/*获取ID*/
    function getId(id){
        return document.getElementById(id);
    }
/*获取class*/
    function getClass(attr){
        return document.getElementsByClassName(attr);
    }
/*获取tagName*/
    function getTag(tag){
        return document.getElementsByTagName(tag);
    }

/*获取计算后的样式*/
    function getStyle(element,attr){
        if(typeof window.getComputedStyle!='undefined'){ //W3C
            return window.getComputedStyle(element,null)[attr];
        }else if(typeof element.currentStyle!='undefined'){  //IE
            return element.currentStyle[attr];
        }
    }

/*设置动画效果*/
    function moveElem(elem,final_x,final_y,interval){
        if(elem.movement){
            clearInterval(elem.movement);
        }
        var xpos=parseInt(getStyle(elem,'left'));
        var ypos=parseInt(getStyle(elem,'top'));
        var dist=0;
        elem.movement=setInterval(function(){
            if(xpos==final_x && ypos==final_y){
                clearInterval(elem.movement);
            }
            if(xpos<final_x){
                dist=Math.ceil((final_x-xpos)/10);
                xpos+=dist;
            }else if(xpos>final_x){
                dist=Math.ceil((xpos-final_x)/10);
                xpos-=dist
            }
            if(ypos<final_y){
                dist=Math.ceil((final_y-ypos)/10);
                ypos+=dist;
            }else if(ypos>final_y){
                dist=Math.ceil((ypos-final_y)/10);
                ypos-=dist
            }
            elem.style.left=xpos+'px';
            elem.style.top=ypos+'px';
        },interval)
    }

//跨浏览器获取浏览器视口大小
    function getInner(){
        if(typeof window.innerWidth!='undefined'){
            return {
                width:window.innerWidth,
                height:window.innerHeight
            }
        }else{
            return {
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight
            }
        }
    }

//跨浏览器获取滚动条位置
    function getScroll() {
        return {
            top : document.documentElement.scrollTop || document.body.scrollTop,
            left : document.documentElement.scrollLeft || document.body.scrollLeft
        }
    }



















