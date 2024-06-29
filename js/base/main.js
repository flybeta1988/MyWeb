let myHeading = document.querySelector('H1');
myHeading.textContent = "Hello world!";

const button = document.querySelector('button')
button.onclick = function () {
    //let name = prompt("What is your name?")
    //alert("Hello " + name + ", nice to see you!");
    wrap = document.getElementById("wrap")
    aBtn = document.createElement("a");
    aBtn.setAttribute("href", "javascript:;")
    aBtn.addEventListener('click', function () {
        alert("aaa");
    })
    aBtn.addEventListener('click', function () {
        alert("bbb");
    })
    aBtn.textContent = "点我啊";
    wrap.appendChild(aBtn)
}
