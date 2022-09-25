window.onload = function(){
    let leftbutton = document.getElementById("leftbutton");
    let rightbutton = document.getElementById("rightbutton");
    let ul = document.getElementById("banner-ul");
    ul.appendChild(ul.firstChild.cloneNode(true))


    let left = 0;
    let step = parseInt(ul.children[0].offsetWidth, 10);
    let childrenLength = ul.children.length;
    let idx = 0

    leftbutton.onclick = function () {
        if (idx == 0){
            ul.style.transition = "none";
            idx = childrenLength-1
            left = -idx*step;
            ul.style.left = left + "px";

            setTimeout(() => {
                ul.style.transition = 'left .3s ease 0s';
                idx--;
                left = -idx*step;
                ul.style.left = left + "px";
            },0)
        }else{
            ul.style.transition = 'left .3s ease 0s';
            idx--;
            left = -idx*step;
            ul.style.left = left + "px";
        }
        
        

        console.log(idx);
    }

    rightbutton.onclick = function () {
        ul.style.transition = 'left .3s ease 0s';
        idx++;
        left = -idx*step;
        ul.style.left = left + 'px';
        if (idx == childrenLength-1){
            setTimeout(() => {
                ul.style.transition = 'none';
                idx = 0
                left = -idx*step;
                ul.style.left = left + 'px';
            }, 500);
        }
        console.log(idx);
    };
}