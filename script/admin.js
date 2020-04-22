var items=[];

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