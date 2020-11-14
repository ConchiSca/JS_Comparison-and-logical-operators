const age = 20;

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!"); // older/equal than 18 + younger/equal than 25;
    }
 else {
    console.log("Sorry, full price."); // younger than 18 and older than 25;
    }

const name = "Sarah";

if (name == "Sarah" || name == "Bram"){
    console.log("Hee, en je krijgt een gratis biertje!");
}
else {
    console.log("Een biertje is 6 euro, alsjeblief.");
}

const totalAmount = 30;

if (totalAmount < 50){
    if (totalAmount > 25){
    console.log("Hier zijn je gratis bitterballen!")
    }  else {
        console.log("Sorry, geen cadeautje")
    }   
} else if (totalAmount > 50 && totalAmount < 100){
    console.log("Een gratis portie nacho's voor jullie!")
    } 
if(totalAmount > 100){
        console.log("Jullie krijgen een gratis flesje champagne!")
        }



        
    

