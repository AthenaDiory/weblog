
addEvent(window,'load',function(){
    /*显示个人中心菜单*/
    var profile=getClass('profile')[0];
    var proUl=profile.getElementsByTagName('ul')[0];
    addEvent(profile,'mouseover',function(){
        this.style.background='url(img/arrow2.png) no-repeat right 13px';
        proUl.style.display='block';
    });
    addEvent(profile,'mouseout',function(){
        this.style.background='url(img/arrow.png) no-repeat right 13px';
        proUl.style.display='none';
    });
    /*主体导航栏导航滑动*/
    var navBg=getClass('navBg')[0];
    var white=navBg.getElementsByClassName('white')[0];
    var topLi=getClass('top')[0].getElementsByTagName('li');
    var navBgW=parseInt(getStyle(navBg,'width'));
    var navBg_currLeft=parseInt(getStyle(navBg,'left'));
    var white_currLeft=parseInt(getStyle(white,'left'));
    /*导航栏滑动*/
    for(var i=0;i<topLi.length;i++) {
        topLi[i].setAttribute('index', i);
        addEvent(topLi[i],'mouseover',function(){
            var currIndex = this.getAttribute('index');
            var navBg_target=currIndex * navBgW + navBg_currLeft;
            var white_target=white_currLeft-(currIndex) * navBgW;
            moveElem(navBg,navBg_target,0,20);
            moveElem(white,white_target,0,20);
        });
        addEvent(topLi[i],'mouseout',function(){
            moveElem(navBg,navBg_currLeft,0,20);
            moveElem(white,white_currLeft,0,20);
        })
    }
    /*中部左侧导航slide*/
    var sidebar=getClass('sidebar')[0];
    var sidebar_h2=sidebar.getElementsByTagName('h2');
    for(var j=0;j<sidebar_h2.length;j++){
        addEvent(sidebar_h2[j],'click',function(){
            if(this.nextSibling.nodeName=='#text'){
                //清理空格，浏览器将换行也当做DOM元素
                var sidebar_ul=this.nextSibling.nextSibling;
            }else{
                 sidebar_ul=this.nextSibling;
            }
            if(getStyle(sidebar_ul,'display')=='block'){
                sidebar_ul.style.display='none';
            }else{
                sidebar_ul.style.display='block';
            }
        });
    }

    /*登录界面*/
    var logIn=getClass('logIn')[0];
    var screen=getClass('screen')[0];
    var login=getClass('login')[0];
    var close=login.getElementsByClassName('close')[0];
    addEvent(logIn,'click',function(){
        lock(screen);               //锁屏
        login.style.display='block';
        center(login);              //局中显示

    });
    /*登录界面拖拽事件*/
    var h2=login.getElementsByTagName('h2')[0];
    drag(h2,login);
    /*改变浏览器视口事件*/
    addEvent(window,'resize',function(){
        if(getStyle(screen,'display')=='block'){
            lock(screen);
        }
        if(getInner().width-login.offsetLeft<=login.offsetWidth||getInner().height-login.offsetTop<=login.offsetHeight){
            center(login);
        }
    });
    //关闭登录界面
    addEvent(close,'click',function(){
        unlock(screen);
        login.style.display='none';
    });

    /*注册界面*/
    var signIn=getClass('signIn')[0];
    var sign=getClass('sign')[0];
    var signClose=sign.getElementsByClassName('signClose')[0];
    addEvent(signIn,'click',function(){
        lock(screen);               //锁屏
        sign.style.display='block';
        center(sign);
    });
    /*注册界面拖拽事件*/
    var signH2=sign.getElementsByTagName('h2')[0];
    drag(signH2,sign);
    /*改变浏览器视口事件*/
    addEvent(window,'resize',function(){
        if(getStyle(screen,'display')=='block'){
            lock(screen);
        }
        if(getInner().width-sign.offsetLeft<=sign.offsetWidth||getInner().height-sign.offsetTop<=sign.offsetHeight){
            center(sign);
        }
    });
    //关闭登录界面
    addEvent(signClose,'click',function(){
        unlock(screen);
        sign.style.display='none';
    });








    //侧边栏分享滑入滑出
    var share=getClass('share')[0];
    share.style.top=(getInner().height-share.offsetHeight)/2+getScroll().top+'px';
    addEvent(share,'mouseover',function(){
        var share_target_y=share.offsetTop;
        var share_target_x=0;
        moveElem(share,share_target_x,share_target_y,10);
    });
    addEvent(share,'mouseout',function(){
        var share_target_y=share.offsetTop;
        var share_target_x=-210;
        moveElem(share,share_target_x,share_target_y,10);
    });
    //侧边栏分享垂直居中
    addEvent(window,'scroll',function(){
        var share_target_y=(getInner().height-share.offsetHeight)/2+getScroll().top;
        var dist=0;
        var ypos=share.offsetTop;
        setTimeout(function() {
                if (ypos < share_target_y) {
                    dist = Math.ceil((share_target_y - ypos) / 2);
                    ypos += dist;
                } else if (ypos > share_target_y) {
                    dist = Math.ceil((ypos - share_target_y) / 2);
                    ypos -= dist;
                    }
              share.style.top=ypos+'px';
        },50)
    });









});
















