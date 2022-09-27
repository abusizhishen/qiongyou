window.onload = function(){
    let leftbutton = document.getElementById("leftbutton");
    let rightbutton = document.getElementById("rightbutton");
    let ul = document.getElementById("banner-ul");
    ul.appendChild(ul.firstChild.cloneNode(true))


    let left = 0;
    let step = 16.667
    let childrenLength = ul.children.length;
    let idx = 0
    var translateX = function(ele,percent) {
        ele.style.transform = 'translateX(' + percent + '%)';
    }
    leftbutton.onclick = function () {
        if (idx == 0){
            ul.style.transition = 'none';
            idx = childrenLength-1
            left = -idx*step;
            translateX(ul,left)

            setTimeout(() => {
                ul.style.transition = 'transition: transform .5s ease 0s';
                idx--;
                left = -idx*step;
                translateX(ul,left)
            },0)
        }else{
            ul.style.transition = 'transition: transform .5s ease 0s';
            idx--;
            left = -idx*step;
            translateX(ul,left)
        }
        
        
        console.log(idx);
        setCrycle(idx);

    }

    rightbutton.onclick = function () {
        ul.style.transition = 'transition: transform .5s ease 0s';
        idx++;
        left = -idx*step;
        translateX(ul,left);
        setCrycle(idx);
        if (idx >= childrenLength-1){
            setTimeout(() => {
                ul.style.transition = 'none';
                ul.style.transform = "none";
                idx = 0;
                // translateX(ul,0);
            }, 500);
        }
        console.log(idx);
        
    };

    let crycleUl = document.getElementById('little-cryclr');
    let setCrycle = function(idx){
        idx %=5
        var children = crycleUl.children;
        for (i=0;i<children.length;i++){
            if (i!= idx){
                // console.log('idx', idx)
                children[i].className = '';
            }else{
                children[i].className = 'active';
            }
        }
    };

    setCrycle(idx)
}