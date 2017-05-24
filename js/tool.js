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
        if(obj.removeEventListener){    //W3C
            obj.removeEventListener(type,fn,false);
        }else if(obj.detachEvent){      //IE
            obj.detachEvent('on'+type,fn);
        }
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





//遮罩锁屏
    function lock(elem){
        var width=getInner().width;
        var height=getInner().height;
        elem.style.width=width+'px';
        elem.style.height=height+'px';
        elem.style.display='block';
        getTag('body')[0].style.overflow='hidden';
    }
    function unlock(elem){
        elem.style.display='none';
        getTag('body')[0].style.overflow='auto';
    }

//鼠标拖拽事件

  function drag(childElem,parentElem){
      addEvent(childElem,'mousedown',function(e){
          var diffX=e.clientX-parentElem.offsetLeft;
          var diffY=e.clientY-parentElem.offsetTop;
          addEvent(document,'mousemove',move);
          addEvent(document,'mouseup',up);
          function move(e){
              var left=e.clientX-diffX;
              var top=e.clientY-diffY;
              if(left<=0){
                  left=0;
              }else if(left<=getScroll().left) {
                  left=getScroll().left
              }else if(left>=getInner().width-parentElem.offsetWidth){
                  left=getInner().width-parentElem.offsetWidth+getScroll().left;
              }
              if(top<=0){
                  top=0;
              }else if(top<=getScroll().top){
                  top=getScroll().top
              }else if(top>=getInner().height-parentElem.offsetHeight){
                  top=getInner().height-parentElem.offsetHeight+getScroll().top;
              }
              parentElem.style.left=left+'px';
              parentElem.style.top=top+'px';
              if(typeof parentElem.setCapture!='undefined'){
                  parentElem.setCapture();
              }
          }
          function up(){
              removeEvent(document,'mousemove',move);
              removeEvent(document,'mouseup',up);
              if(typeof parentElem.releaseCapture!='undefined'){
                  parentElem.releaseCapture();
              }

          }
      });
  }
    
//物体局中显示
function center(elem){
    elem.style.left=(getInner().width-elem.offsetWidth)/2+'px';
    elem.style.top=(getInner().height-elem.offsetHeight)/2+'px';
}












