class Smoothie{
    //Variables for smoothie
    size; //Variable for holding size
    flavor; //Variable for holding flavor
    addition; //Variable for holding additions
    freshFruit; //Variable for holding if smoothie is made with fresh fruit

    //Constructor for initializing the value for the object
    constructor(size, flavor, addition, freshFruit) {
        this.size = size; //Set value of size to the value of parameter passed
        this.flavor = flavor; //Set value of flavor to the value of parameter passed
        this.addition = addition; //Set value of addition to the value of parameter passed
        this.freshFruit = freshFruit; //Set value of fresh fruit to the value of parameter passed
    }
    smoothieDescription(){ //function for smoothie description
        //Use if statement that check the value of fresh and additions so that the right order details get returned
        if(this.freshFruit === "false" && this.addition === "None"){
            return `A ${this.size} ${this.flavor} smoothie with no additions and made with Frozen Fruit` //Returns order detail
        }else if(this.freshFruit === "true" && this.addition === "None"){
            return `A ${this.size} ${this.flavor} smoothie with no additions and made with Fresh Fruit` //Returns order detail
        }else if(this.freshFruit === "true" && this.addition === "Milk" || this.freshFruit === "true" && this.addition === "Yogurt"){
            return `A ${this.size} ${this.flavor} smoothie made with ${this.addition} and Fresh Fruit` //Returns order detail
        }else{
            return `A ${this.size} ${this.flavor} smoothie made with ${this.addition} and Frozen Fruit`; //Returns order detail
        }
    }
}

const form = document.querySelector('form'); //Selects the form and stores it in variable
form.addEventListener('submit', customerOrder) //Add an event listener to calls customerOrder function on submit

//Function for display customer order details
function customerOrder(event){
    event.preventDefault(); //Prevent page from reloading

    const size = document.getElementById('size').value; //Grabs the value for size
    const flavor = document.getElementById('flavor').value; //Grabs the value for flavor
    const addition = document.getElementById('additions').value; //Grabs the value for additions
    const freshFruit = document.querySelector('input[name="freshfruits"]:checked').value; //Grabs the value of the checkbox selected

    let customerSmoothie = new Smoothie(size, flavor, addition, freshFruit); //Creates new object for smoothie
    //console.log(customerSmoothie.smoothieDescription()); Console log for making sure smoothie details were being returned correctly
    const orderInformation = document.querySelector('#orderInformation'); //Selects the div for order information and stores it in variable
    orderInformation.innerHTML =""; //Clears html in orderInformation div so new order appears everytime
    let text = document.createElement("p"); //Creates element p and stores it in variable
    text.textContent = customerSmoothie.smoothieDescription(); //Adds the smoothie description as text for p element
    orderInformation.append(text); //Adds the p element to the div for order information
    let smoothieImage = document.createElement("img"); //Creates an img element and stores it in variable
    switch (customerSmoothie.flavor) { //Switch loop that checks the value of flavor and gets the corresponding image.
        case "Strawberry":
            smoothieImage.setAttribute('src', "Images/Strawberry.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
            break;
        case "Banana":
            smoothieImage.setAttribute('src', "Images/Banana.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
            break;
        case "Orange":
            smoothieImage.setAttribute('src', "Images/Orange.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
            break;
        case "Apple":
            smoothieImage.setAttribute('src', "Images/Apple.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
            break;
        case "Kiwi":
            smoothieImage.setAttribute('src', "Images/Kiwi.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
            break;
        default:
            smoothieImage.setAttribute('src', "Images/Strawberry.jpg"); //Set image for flavor
            determineSize(customerSmoothie.size, smoothieImage); //Calls function passing the value of size and image element so height can be adjusted properly
    }
    orderInformation.append(smoothieImage); //Adds the image to the div for order information
}

//Function for set the image size based on the smoothie side ordered
function determineSize(size, image){
    switch(size){ //Switch loop to check order size and set height of image based on the value of size
        case "Small":
            image.setAttribute("height", "100") //Set image height
            break;
        case "Medium":
            image.setAttribute("height", "150") //Set image height
            break;
        case "Large":
            image.setAttribute("height", "200") //Set image height
            break;
        default:
            image.setAttribute("height", "100") //Set image height
    }
}