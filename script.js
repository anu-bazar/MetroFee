//Welcome to my JS kingdom! 
//This is our array of metro stations so we can do some cool stuff with its index later on Ⓜ️
//These are real M4 metro stations I go through everyday!
const metroStations = [
    "Kelenfold vasutallomas",
    "Bikas Park",
    "Ujbuda kozpont",
    "Moricz Zsigmond korter",
    "Szent Gellert ter",
    "Fovam ter",
    "Kalvin ter",
    "Rakoczi ter",
    "II. Janos Pal papa ter",
    "Keleti palyaudvar"
];

//Let's use the array for a fun experiment! (with a for loop) 🙌
const shortestStation=[]; //initialize an empty array.
for (let i=0; i<metroStations.length;i++){ 
  //for every array element we are going to check how much their length in characters is.
  const lengthStationName= metroStations[i].length; 
  shortestStation.push(lengthStationName); //we populate the array with the station names' character lengths
}
const shortestStationHas=Math.min(...shortestStation); //here we use a spread syntax and find the minimum length of the shortest station name.
console.log(`Fun fact: The shortest station name has ${shortestStationHas} characters!🙀🎊😲🫢😮`); //and we now have our fun fact!

//This is my alert mimicking cookies/gdpr consent. 🍪 (with an alert)
alert("By clicking 'OK' you are accepting our terms and conditions to use your data for our very evil plans to bake more cookies. Do you accept?");
//This is my main function to calculate fare and display results 🧮 (with a function)
function calculateFare() {
    //user inputted nearest metro station is checked ✅
    const nearestStationValue = document.querySelector('input[name="nearest-metro-station"]:checked').value;
    //user inputted destination metro station is checked✅
    const destinationStationValue = document.querySelector('input[name="destination-metro-station"]:checked').value;
    //user inputted data: whether if they have a budapest discount ✅
    const cardDiscount = document.querySelector('input[name="bp-card"]:checked').value; 
    //looking for the station names in the array ✅
    const nearestStation = metroStations.find(station => station == nearestStationValue);
    const destinationStation = metroStations.find(station => station == destinationStationValue);

    //The following block is fetching the nearest and destination stations' indexes because we can make javascript do the math of how many stations away it is from each other! 📌
    if (nearestStation && destinationStation) { //checks if empty string or null or undefined, then it wont execute ❌ (if else statements)
        const nearestStationIndex = metroStations.indexOf(nearestStation);
        const destinationStationIndex = metroStations.indexOf(destinationStation);
        if (nearestStationIndex !== -1 && destinationStationIndex !== -1) { //this code block executes only if it does not return a value of -1
            //we are now calculating how many stations the user is going times the station fare added with the base fee and the discount 💰
            const stationsAway = Math.abs(destinationStationIndex - nearestStationIndex); //math.abs guarantees it's always a positive value, kind of like the |-2|=2 thing in maths 🧸
            const baseFee = 250;
            const oneStationFee = 100;
            let discountAmount;
            if (cardDiscount == "true"){ //if the discount is applied then they get 10% off, and if not it's just as is 🫡 (Boolean values in if else statements)
              discountAmount = 0.9;
            } 
            else{
              discountAmount=1;
            }
            const metroFare = (stationsAway * oneStationFee + baseFee)*discountAmount;

            //printing in console to see if calculations worked 🥣 (Console log statements)
            console.log("Boarding from " + nearestStation);
            console.log("You're going to " + destinationStation);
            console.log(`You are ${stationsAway} stations away.`); 
            console.log("Metro Fare " + metroFare + " HUF");
            document.getElementById("metroFare").textContent = metroFare + " HUF";
        } else { //additional error messages ❌
            console.log("One or both of the selected station(s) were not found in the array.");
        }
    } else { 
        console.log("We ran into an error. Oops!");
    }
}

//Changing text cash or card due to user input 💰🏧(DOM Event that modifies HTML)
function cashOrCard(){
  const Munchkinom= document.getElementById("cashOrCard-h3");
  Munchkinom.textContent = "Payment info saved.✅";
}
document.getElementById("cashOrCardButton").addEventListener("click", cashOrCard);
//the end!