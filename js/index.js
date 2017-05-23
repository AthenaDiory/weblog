
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
    /*导航栏滑动开始*/
    for(var i=0;i<topLi.length;i++) {
        topLi[i].setAttribute('index', i);
        addEvent(topLi[i],'mouseover',function(){
            var currIndex = this.getAttribute('index');
            var navBg_target=currIndex * navBgW + navBg_currLeft;
            var white_target=white_currLeft-(currIndex) * navBgW;
            moveElem(navBg,navBg_target,0,20);
            moveElem(white,white_target,0,20);
        });
    }










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
    })












});
















