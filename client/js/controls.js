var fetch = require("node-fetch");

var x = 0
var y = 0

const getData = async url => {
    var data;
    try {
      const response = await fetch(url);
      const json = await response.json();
      data = json;
    } catch (error) {
      throw error;
    }
    return data;
};

window.onload = () => {
    var cube = document.getElementById("cube")
    var speed = 3

    var data = getData("http://172.16.1.76:8080/updatePos")
    data.then((value) => {
        cube.style.left = value.x.toString() + "px";
        cube.style.top = value.y.toString() + "px";
    });

    var vertSpeed = 0
    var horoSpeed = 0

    window.addEventListener("keydown", (event) => {
        if(event.key == "a") {
            horoSpeed = -speed;
            cube.style.left = x.toString() + "px";
        }
        if(event.key == "d") {
            horoSpeed = speed;
            cube.style.left = x.toString() + "px";
        }
        if(event.key == "w") {
            vertSpeed = -speed;
            cube.style.top = y.toString() + "px";
        }
        if(event.key == "s") {
            vertSpeed = speed;
            cube.style.top = y.toString() + "px";
        }
    });

    window.addEventListener("keyup", (event) => {
        if(event.key == "a") {
            horoSpeed = 0;
            cube.style.left = x.toString() + "px";
        }
        if(event.key == "d") {
            horoSpeed = 0;
            cube.style.left = x.toString() + "px";
        }
        if(event.key == "w") {
            vertSpeed = 0;
            cube.style.top = y.toString() + "px";
        }
        if(event.key == "s") {
            vertSpeed = 0;
            cube.style.top = y.toString() + "px";
        }
    });

    setInterval(() => {
        y += vertSpeed
        x += horoSpeed
        cube.style.top = y.toString() + "px";
        cube.style.left = x.toString() + "px";
        getData(`http://localhost:8080/setPos/${x.toString()}/${y.toString()}`);
    }, 0)
}