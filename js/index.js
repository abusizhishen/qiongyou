window.onload = function(){
    let leftbutton = document.getElementById("leftbutton");
    let rightbutton = document.getElementById("rightbutton");
    let ul = document.getElementById("banner-ul");
    let left = 0;
    let step = parseInt(ul.children[0].offsetWidth, 10);
    let childrenLength = ul.children.length;
    let minLeft = -(childrenLength-1)*step;

    console.log("ul width: ", step, "minLeft: ", minLeft)


    
    var reset = function () {
        ul.style.transition = 'left .3s ease 0s';
    };

    leftbutton.onclick = function () {
        reset()
        

        if (left == 0){
            left = minLeft;;
            ul.style.transition = "";
            ul.style.left = left + "px";
        }else{
            left += step;
            ul.style.left = left + 'px';
        }


        console.log(left);
    }

    rightbutton.onclick = function () {
        reset()
        if (left == minLeft){
            ul.style.transition = "";
            left = 0;
            ul.style.left = left + 'px';
        }else{
            left -= step
            ul.style.left = left + 'px';

        }
        console.log(left)
    };
}