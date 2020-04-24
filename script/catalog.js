/* global variables */
var items=[];
var serverURL="http://restclass.azurewebsites.net/API/";

// var items = [
//     {
//         // first item
//         code:'1tvs',
//         title:'TV',
//         price:1000,
//         description:"This is the long description of the item",
//         category:'Electronics',
//         image:'img/tv.jpg'
//     },
//     {
//         //second item
//         code: '1ph10',
//         title: 'Phone',
//         price: 10000,
//         description: "This is the long description of the item",
//         category: 'Mobile devices',
//         image: 'img/iphone.jpg'
//     },
//     {
//         //third item
//         code: '2spk',
//         title: 'Speakers',
//         price: 100,
//         description: "This is the long description of the item",
//         category: 'Sound',
//         image: 'img/sound.jpg'
//     },
//     {
//         //fourth item
//         code: '1cpd',
//         title: 'Computer',
//         price: 500,
//         description: "This is the long description of the item",
//         category: 'Compute',
//         image: 'img/pc.jpg'
//     }

// ];

/*functions*/

function fetchCatalog(){
    //get the items from the server
    $.ajax({
        url:serverURL+"points",
        type:"GET",
        success: function(res){
            console.log("Server responded OK", res);
        },
        error:function(Details){
            console.log("Error", Details);
        }
    });
}


function displayCatalog(){
    
    // travel the array
    for(var i = 0; i<items.length; i++){
        // get the element from the array
        var product = items[i];
        //Create the string
        var layout=`<div class="item" id="${product.code}">
            <img class="image" src="${product.image}">
            <h4>${product.title}</h4>
            <h6 class="item-price">${product.price}</h6>
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
    fetchCatalog();
    displayCatalog();

}

displayCatalog();

$('#search-btn').on('click', function(){
    /* body search function */
    var searchString = $('#search-txt').val();
    /* travel the array */
    for(var i=0;i<items.length;i++){
        /* conditional */
        if(searchString.toUpperCase() != items[i].title.toUpperCase()){
            /* execute the change */
            $('#' + items[i].code).hide();
        }
        else {
            $('#' + items[i].code).show();
        }

        if(searchString==""){
            
        }
    }
    
    
});


/* initialization */
window.onload=init
