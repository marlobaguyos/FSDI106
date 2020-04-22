/* global variables */

var items = [
    {
        // first item
        code:'1tvs',
        title:'TV samsung',
        price:1000,
        description:"This is the long description of the item",
        category:'Electronics',
        image:'img/tv.jpg'
    },
    {
        //second item
        code: '1ph10',
        title: 'Iphone X',
        price: 10000,
        description: "This is the long description of the item",
        category: 'Mobile devices',
        image: 'img/iphone.jpg'
    },
    {
        //third item
        code: '2spk',
        title: 'Speakers',
        price: 100,
        description: "This is the long description of the item",
        category: 'Sound',
        image: 'img/sound.jpg'
    },
    {
        //fourth item
        code: '1cpd',
        title: 'Computer',
        price: 500,
        description: "This is the long description of the item",
        category: 'Compute',
        image: 'img/pc.jpg'
    }

];

/*functions*/
function displayCatalog(){
    
    // travel the array
    for(var i = 0; i<items.length; i++){
        // get the element from the array
        var product = items[i];
        //Create the string
        var layout=`<div class="item" id="${product.code}">
            <img src="${product.image}">
            <h4>${product.title}</h4>
            <h6>${product.price}</h6>
            <p>${product.description}</p>
            <div class="button-div">
                <button class="btn btn-primary mb-2">Add to Cart</button>
            </div>
            
        </div>`;
        console.log(i,layout);
        // display the element in the DOM (HTML)

        $("#catalog").append(layout);
    }

}

function init() {
    console.log('Catalog page');

}

displayCatalog();

function register() {
    //save from the input in a var
    console.log('Current items' + items.length);
    var code=$('#code').val();
    var title=$('#title').val();
    var price=$('#price').val();
    var description=$('#description').val();
    var category=$('#category').val();
    var image=$('#image').val();

    //assing the var to the attribute
    items.push({
        code:code,
        title:title,
        price:price,
        description:description,
        category:category,
        image:image
    });

    console.log('New item:' + items.length);

}

$("#register-btn").on('click', function(){
    register();
});

/* initialization */
window.onload=init
