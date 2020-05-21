/*First try to get the value of the search field whenever a user types in that field, and log
that value to the screen with a console.log() statement. Checkout the keyup event
listener for this. And be sure to make the value case insensitive by using something like
the toLowerCase() method.*/

//The Vanilla JS way..
//two lines
//var imgSearchObj = document.getElementById("imgsearch");
//imgSearchObj.addEventListener("keyup", myFunction());

//The Vanilla JS way..
//chain method
document.getElementById("imgsearch").addEventListener("keyup", myFunction);

//The jQuery way..
//$("#imgsearch").on("keyup", myFunction());


//the purpose this function is to read the input of imgsearch and then output to console log
function myFunction() {
    let i = document.getElementById("imgsearch");
    let imgSearch = i.value.toLowerCase();
    console.log(imgSearch);

    for (let i = 0; i < 12; i += 1) {
        let dataTitle = document.getElementsByTagName("a")[i].getAttribute("data-title");
        console.log(dataTitle);

        let n = dataTitle.indexOf(imgSearch);
        console.log(n);

        if (n == -1) {
            document.getElementsByTagName("a")[i].style.display = 'none';
        }
        else {
            document.getElementsByTagName("a")[i].style.display = 'block';
        }
    }
}

//Next, start trying to target the entire caption by using the getAttribute() method, then
//looping and logging the all lowercase version of the captions to the console 

//Next comes the fun part.Start trying to find ways to check if the current value of the
//search input is included within any of the captions, and if so, log the associated image
//to the console.