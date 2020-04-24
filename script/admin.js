var serverURL="http://restclass.azurewebsites.net/API/";

var items=[];

function init(){
    console.log("Admin Page");
}

window.onload=init;

//object constructor

class Item {
    constructor(code, title, price, description, category, image) {
        this.code=code;
        this.title=title;
        this.price=price;
        this.description=description;
        this.category=category;
        this.image=image;
        this.user="Marlo";
    }
}

function register() {
    //save from the input in a var
    console.log('Current items' + items.length);
    var code=$('#code').val();
    var title=$('#title').val();
    var price=$('#price').val();
    var description=$('#description').val();
    var category=$('#category').val();
    var image=$('#image').val();

    if(code!=" " && title!=" " && price!=" " && description!=" " && category!=" " && image!=" " ){
        // create an object
        var newItem=new Item(code,title,price,description,category,image);
        // assing the var to the attribute
        items.push(newItem);
        console.log(newItem);

        console.log('New item:' + items.length);
        alert("You registered a new product")
    }

    //Asyn JS and XML
    //send obj to server (string, int, boolean)
    $.ajax({
        
    });

}

$("#register-btn").on('click', function(){
    register();
});

// homework

function solveHW(){
    var data=[
        {
            age:28,
            name:"Eli",
            color:"Orange"
        },
        {
            age:35,
            name:"Zach",
            color:"Blue",
        },
        {
            age:26,
            name:"Larry",
            color:"Blue"
        },
        {
            age:37,
            name:"Ed",
            color:"blue"
        },
        {
            age:30,
            name:"Jeremy",
            color:"Peach",
        },
        {
            age:28,
            name:"Pavel",
            color:"purple"
        },
        {
            age:33,
            name:"Chad",
            color:"Red"
        }
    ]
}

//Who (name - age) is the oldest

// for(var i; i < data.length; i++){

// }


// read about HTTP methods (GET, POST, PUT, PATCH, DELETE)