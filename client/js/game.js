var fetch = require("node-fetch");

window.addEventListener("load", () => {
    // Initialize game.
    var cube = document.getElementById("cube");
    var ping = document.getElementById("ping")

    // Connect to server
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

    const getDate = () => {
        return Math.floor(new Date() / 1000);
    };

    setInterval(() => {
        var data = getData("http://localhost:8080/updatePos"); // the server
        var timeThen = getDate()
        data.then((value) => {
            var timeNow = getDate();
            var p = timeThen - timeNow; // get ping
            ping.innerHTML = p.toString() + "ms";
            cube.style.left = value.x.toString() + "px";
            cube.style.top = value.y.toString() + "px";
        });
    }, 0); // min amount of time possible
});