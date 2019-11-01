

const calendarLib = {
    "Name": "julian"
    , "Render": function () {
        return "<table></table>";
    }
};


const o = new Object();
o.Age = 4;
o.Height = 36;
o.Speak = function () { alert("I am " + this.Age + " years old"); };


//const Account = function (id, name)
//{
//    this.id = id;
//    this.name = name;
//    this.balance = 0;
//    this.numTransactions = 0;
//};

function Account(id, name) {
    this.id = id;
    this.name = name;
    this.balance = 0;
    this.numTransactions = 0;
}

var acc1 = Account(1, "matt");


function Car(make, model) {
    this.Make = make;
    this.Model = model;
    this.Start = function () {
        this.Speed = 0;
        this.IsRunning = true;
    };
    this.Accelerate = function () {
        this.Speed += 5;
    };

    this.Stop = () => {
        this.Speed = 0;
        this.IsRunning = false;
    };

    return this;
}

let car1 = new Car("chrysler", "T&C");
car1.Start();
car1.Accelerate();
alert(car1.Speed);



function setColor(color) {
    this.color = color;
}

function setObjectColor(obj, color) {
    obj.color = color;
}


let cars = [
    { "make": "A" }
    , {"make":"B"}
];

setColor.apply(cars, "red");



