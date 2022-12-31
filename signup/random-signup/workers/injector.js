// Use this function to generate random string like occupation or short descriptions or messages.
function generateRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Use this function to generate random strings without numerals like names or first name or last name or anything else.
function generateRandomName(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Use this function to generate random integers between start and end bounds.
function generateRandomInteger(startBound,endBound) {
    return startBound + (Math.floor(Math.random() * endBound));
}

// Use this function to generate random email addresses.
function generateRandomEmail() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result+"@gmail.com";
}

// you can create as many variables as many inputs you want.
var firstname = generateRandomName(5);
var lastname = generateRandomName(5);
var city = generateRandomString(7);
var age = generateRandomInteger(10,100); 

// set the element ids inside the below "document.getElementById() functions with the corresponding variable values, which you created above."
document.getElementById("id of first name input").value=firstname;
document.getElementById("id of last name input").value=lastname;
document.getElementById("id of city input").value=city;
document.getElementById("id of age input").value=age;

// Put code for button click here.

console.log("first name: " + firstname);
console.log("last name: " + lastname);
console.log("city: " + city);
console.log("age: " + age);
