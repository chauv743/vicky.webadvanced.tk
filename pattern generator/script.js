




// while (i < 10) {
//     console.log("The number is " + i);
//     i++;
// }
//
// // Set Timeout allows us to delay the execution of a function.
// // waits 3 seconds prior to running the console log.
// setTimeout(function(){
//     console.log("Hello World");
// }, 3000);




// We can use Set Timeout in conjunction with our loop to time our console.log events:
// var timer = 0;
// var counter = 0;
//
// // for (var i = 0; i < 10; i++) {
// //     setTimeout(function(){
// //         console.log("Hello World " + Math.random()*5);
// //     }, timer);
// //     timer += 100;
// //     counter++;
// // }






var timer = 0;
var counter = 0;


for (var i = 0; i < 50; i++) {     //(i < 50) ---> how many lines will be printed
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 100; s++) {
            if (Math.random()*100 < 50) {
                snow += "$$";
            } else {
              snow += " . ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}


for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 40; s++) {
            if (Math.random()*100 < 40) {
                snow += "$$";
            } else {
              snow += " __ ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}


for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 100; s++) {
            if (Math.random()*100 < 50) {
                snow += "$$";
            } else {
              snow += " . ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}


for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 40; s++) {
            if (Math.random()*100 < 40) {
                snow += "$$";
            } else {
              snow += " __ ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}


for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 100; s++) {
            if (Math.random()*100 < 50) {
                snow += "$$";
            } else {
              snow += " . ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}


for (var i = 0; i < 50; i++) {
    setTimeout(function() {
        var snow = "";
        for (var s = 0; s < 40; s++) {
            if (Math.random()*100 < 40) {
                snow += "$$";
            } else {
              snow += " __ ";
            }

        }
        console.log(snow);
    }, timer);
    timer += 50; //pace in milliseconds
    counter++;
}
