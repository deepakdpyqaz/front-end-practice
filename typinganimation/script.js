let inputtext = document.querySelector('#type input');
let animated = document.querySelector('#animated #text');
let animatebtn = document.querySelector('#type button');
let predefined = null;
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

if(params.text){
    inputtext.value = params.text;
    repeateFlicker(animated, params.text);
}

animatebtn.addEventListener('click', function() {
    if(predefined){
        clearTimeout(predefined);
    }
    predefined = setTimeout(() => {
        repeateFlicker(animated, inputtext.value);

    }, 1000);

});

function repeateFlicker(node,item){
    if(predefined){
        clearTimeout(predefined);
    }
    let time = item.length* 300 * 2 + 100
    predefined = setTimeout(() => {
        flicker(node, item);
        repeateFlicker(node,item);
    },time);
}



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
    predefined = setTimeout(() => {
        animateflicker(node, list, index);
    }, time);
}
if(!params.text){
    animateflicker(animated, ['Hii, This is Deepak Prakash....', 'I am a front-end developer....', 'Welcome here....']);
}