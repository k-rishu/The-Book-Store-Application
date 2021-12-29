
function Person(name, age){
    this.name = name;
    this.age = age;
    this.license = [];
}



function teachDriving(person, vehicle){
    if(person.age < 18)
        return console.log("you will be eligible after "+(18-person.age)+" years ");

    console.log("you are eligible for driving");
    person.license.push(vehicle);
    person.drive = function(vehicle){
        for(var i of person.license){
            if(i === vehicle){
                return console.log(person.name + " drives " + vehicle);
            }
        }
        return console.log(person.name + " is not licensed to drive "+ vehicle);
    }

}


var shivanshi = new Person("Shivanshi", 15);
var prabhat = new Person("Prabhat", 40);


teachDriving(prabhat, 'car');
teachDriving(shivanshi, 'bus');

prabhat.drive("car");
prabhat.drive("bus");
shivanshi.drive("bus");



