let inputtext = document.querySelector('#type input');
let animated = document.querySelector('#animated #text');
let animatebtn = document.querySelector('#type button');
let isAnimated = true;
animatebtn.addEventListener('click', function() {
    isAnimated = false;
    setTimeout(() => {
        flicker(animated, inputtext.value);
        isAnimated = true;
    }, 1000);
});



//code for flicker
function flicker(node, item) {
    let i = 0;
    let intervale = setInterval(() => {
        node.innerHTML = item.substring(0, i);
        i++;
        if (i == item.length + 1) {
            clearInterval(intervale);
            i = item.length + 1;
            let intervale2 = setInterval(() => {
                node.innerHTML = item.substring(0, i);
                i--;
                if (i == -1) {
                    clearInterval(intervale2);
                }
            }, 200);
        }
    }, 200);

}

//code to handle lists
function animateflicker(node, list, index = 0) {
    if (list.length == 0) {
        return;
    }
    let time = list[index].length * 300 * 2 + 100;
    flicker(node, list[index]);
    index++;
    if (index == list.length) {
        index = 0;
    }
    setTimeout(() => {
        if (isAnimated) {
            animateflicker(node, list, index);
        }
    }, time);
}
animateflicker(animated, ['Hii, This is Deepak Prakash....', 'I am a front-end developer....', 'Welcome here....']);