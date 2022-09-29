window.onload = function () {
    var leftbutton = document.getElementById("leftbutton");
    var rightbutton = document.getElementById("rightbutton");
    var ulele = document.getElementById("banner-ul");
    var li_clone = ulele.firstElementChild.cloneNode(true);
    ulele.appendChild(li_clone);

    var trans5s = 'transform .5s ease 0s';
    var left = 0;
    var step = 16.67;
    var childrenLength = ulele.children.length;
    var idx = 0

    leftbutton.onclick = function () {
        if (idx == 0) {
            ulele.style.transition = 'none';
            idx = childrenLength - 1
            left = idx * step;
            ulele.style.transform = 'translateX(-' + left + '%)';

            setTimeout(function () {
                ulele.style.transition = trans5s;
                idx--;
                left = idx * step;
                ulele.style.transform = 'translateX(-' + left + '%)';
            }, 0)
        } else {
            ulele.style.transition = trans5s;
            idx--;
            left = idx * step;
            ulele.style.transform = 'translateX(-' + left + '%)';
        }

        console.log(idx);
        setCrycle(idx);
    }

    rightbutton.onclick = function () {
        ulele.style.transition = trans5s;
        idx++;
        left = idx * step;
        ulele.style.transform = 'translateX(-' + left + '%)';
        setCrycle(idx);
        if (idx >= childrenLength - 1) {
            setTimeout(function () {
                ulele.style.transition = 'none';
                ulele.style.transform = 'none';
                idx = 0;
            }, 500);
        }
        console.log(idx);

    };

    var crycleUl = document.getElementById('little-cryclr');
    var setCrycle = function (idx) {
        idx %= (childrenLength - 1)
        var children = crycleUl.children;
        for (i = 0; i < children.length; i++) {
            if (i != idx) {
                // console.log('idx', idx)
                children[i].className = '';
            } else {
                children[i].className = 'active';
            }
        }
    };

    setCrycle(idx)

    var crycle = document.getElementById('little-cryclr');
    crycle.onclick = function (ele) {
        idx = Array.from(crycleUl.children).indexOf(ele.target);
        console.log(idx);
        setCrycle(idx);
        ulele.style.transition = trans5s;
        ulele.style.transform = 'translateX(-' + idx * step + '%)';
    }
}