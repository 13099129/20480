

self.onmessage = function (data) {
    if (data.command == "start") {
        //do something
        self.postMessage("I started");



    }
    else if (data.command == "reload") {

    }
};