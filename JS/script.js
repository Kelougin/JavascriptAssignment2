class Smoothie{
    //Variables for smoothie
    size;
    flavor;
    addition;
    freshFruit;
    constructor(size, flavor, addition, freshFruit) {
        this.size = size;
        this.flavor = flavor;
        this.addition = addition;
        this.freshFruit = freshFruit;
    }
    smoothieDescription(){
        if(this.freshFruit === "false" && this.addition === "None"){
            return `A ${this.size} ${this.flavor} smoothie with no additions and made with Frozen Fruit`
        }else if(this.freshFruit === "true" && this.addition === "None"){
            return `A ${this.size} ${this.flavor} smoothie with no additions and made with Fresh Fruit`
        }else if(this.freshFruit === "true" && this.addition === "Milk" || this.freshFruit && this.addition === "Yogurt"){
            return `A ${this.size} ${this.flavor} smoothie made with ${this.addition} and made with Fresh Fruit`
        }else{
            return `A ${this.size} ${this.flavor} smoothie made with ${this.addition} and Frozen Fruit`;
        }
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', customerOrder)

function customerOrder(event){
    event.preventDefault(); //Prevent page from reloading

    const size = document.getElementById('size').value; //Grabs the value for size
    const flavor = document.getElementById('flavor').value; //Grabs the value for flavor
    const addition = document.getElementById('additions').value; //Grabs the value for additions
    const freshFruit = document.querySelector('input[name="freshfruits"]:checked').value; //Grabs the value of the checkbox selected

    let customerSmoothie = new Smoothie(size, flavor, addition, freshFruit); //Creates new object for smoothie
    console.log(customerSmoothie.smoothieDescription());
    const orderInformation = document.querySelector('#orderInformation');
    orderInformation.innerHTML =""; //Clears html in orderInformation div so new order appears everytime
    let text = document.createElement("p");
    text.textContent = customerSmoothie.smoothieDescription();
    orderInformation.append(text);
    let smoothieImage = document.createElement("img");
    switch (customerSmoothie.flavor) {
        case "Strawberry":
            smoothieImage.setAttribute('src', "Images/Strawberry.jpg");
            determineSize(customerSmoothie.size, smoothieImage);
            break;
        case "Banana":
            smoothieImage.setAttribute('src', "Images/Banana.jpg");
            break;
        case "Orange":
            smoothieImage.setAttribute('src', "Images/Orange.jpg");
            break;
        case "Apple":
            smoothieImage.setAttribute('src', "Images/Apple.jpg");
            break;
        case "Kiwi":
            smoothieImage.setAttribute('src', "Images/Kiwi.jpg");
            break;
        default:
            smoothieImage.setAttribute('src', "Images/Strawberry.jpg");
    }
}

function determineSize(size, image){
    switch(size){
        case "Small":
            image.setAttribute("height", "100")
            break;
        case "Medium":
            image.setAttribute("height", "150")
            break;
        case "Large":
            image.setAttribute("height", "200")
            break;
        default:
            image.setAttribute("height", "100")
    }
}