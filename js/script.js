const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

function search() {
  alert("Opps!! Look like our data is not ready. We're sorry for any inconvenience. Please check it later. Thanks!");
}


function myFunction() {
    alert("Your cart is empty!!");
  }
function logIn(){
        alert("Wrong user name or password");
      }

      $(".women").click(function(){
        $("#woman").show();
        $("#man").hide();
        $("#bling").hide();
        $("#electronics").hide();
    });

    $(".men").click(function(){
      $("#woman").hide();
        $("#man").show();
        $("#bling").hide();
        $("#electronics").hide();
  });

  $(".jewelery").click(function(){
    $("#woman").hide();
    $("#man").hide();
    $("#bling").show();
    $("#electronics").hide();
});

$(".electronic").click(function(){
  $("#woman").hide();
  $("#man").hide();
  $("#bling").hide();
  $("#electronics").show();
});
$(document).ready(function() {
	$.get('https://fakestoreapi.com/products', function (data) {
		console.log(data[0].title);
		for (var i = 0; i < data.length; i++) {
			if (data[i].category === "men's clothing") {
				console.log('hello');
				$('#men').append(`
        <div class='card m-2 border-2' style='width:200px;'>
        <img src='${data[i].image}' class='fake'>
        <div class='card-body'>
        <p class ='card-title' id='productTitle'> ${data[i].title} </p>
        <p class='card-text' id='productPrice'> $${data[i].price} </p>
        
        <div>
            <form class='form'>
                <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0' class='price'>
                <button id='${data[i].id}' type='submit' class='add'>Add To Cart</button>
            </form>
            
        </div>
                `);
			} else if (data[i].category === "women's clothing") {
				console.log('hello');
				$('#women').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    
                    <div>
                        <form class='form'>
                            <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0' class='price'>
                            <button id='${data[i].id}' type='submit' class='add'>Add To Cart</button>
                        </form>
                        
                    </div>
                `);
			} else if (data[i].category === 'jewelery') {
				console.log('hello');
				$('#jewelery').append(`
        <div class='card m-2 border-2' style='width:200px;'>
        <img src='${data[i].image}' class='fake'>
        <div class='card-body'>
        <p class ='card-title' id='productTitle'> ${data[i].title} </p>
        <p class='card-text' id='productPrice'> $${data[i].price} </p>
        
        <div>
            <form class='form'>
                <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0' class='price'>
                <button id='${data[i].id}' type='submit' class='add'>Add To Cart</button>
            </form>
            
        </div>
                `);
			} else if (data[i].category === 'electronics') {
				console.log('hello');
				$('#electronic').append(`
        <div class='card m-2 border-2' style='width:200px;'>
        <img src='${data[i].image}' class='fake'>
        <div class='card-body'>
        <p class ='card-title' id='productTitle'> ${data[i].title} </p>
        <p class='card-text' id='productPrice'> $${data[i].price} </p>
        
        <div>
            <form class='form'>
                <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0' class='price'>
                <button id='${data[i].id}' type='submit' class='add'>Add To Cart</button>
            </form>
            
        </div>
                `);
			};
    };
  });
		
      // (Suppose to be this link for category women clothing)
      // $.get("https://storetester.herokuapp.com/api/products/category/women_clothing", function(people) {   
      //   $.get("https://fakestoreapi.com/products", function(data) {
      //     // var data = people.data;
      //     var htmlStr = "";
      //     for(var i = 0; i <20; i++) {
      //       var name = data[i].title;
      //       var price = data[i].price
      //       // var description = data[i].description

      //       htmlStr += "<div class='female m-2 border-2' style='width:200px;'>";
      //       htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake' style='padding:5px'>";
      //       htmlStr += "<div class='card-body'>";
      //       htmlStr += "<h5 class='card-title'>" + name + "</h5>";
      //       htmlStr += "<p class='card-text'>"+ "$" + price + "</p>";
      //       // htmlStr += "<p class='card-text'>" + description + "</>" 
      //       htmlStr += "</div>";
      //       htmlStr += "</div>";
      //   };
      //   $("#women").append(htmlStr);
      // });

      // (Suppose to be this link for category men_clothing)
      // $.get("https://storetester.herokuapp.com/api/products/category/men_clothing", function(people) {   
      //   $.get("https://fakestoreapi.com/products", function(data) {
      //     //var data = people.data;
      //     // var htmlStr = "";

      //   //   for(var i = 0; i <=0; i++) {
      //   //     var name = data[0].title;
      //   //     var price = data[0].price

      //   //     htmlStr += "<div class='male m-2 border-0' style='width:200px;'>";
      //   //     htmlStr += "<img src=" + data[0].image +" alt='product image' class='fake'>";
      //   //     htmlStr += "<div class='card-body margin:10px'>";
      //   //     htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
      //   //     htmlStr += "<p class='card-text'>" + "$" + price + "</p>"; 
      //   //     htmlStr += "</div>";
      //   //     htmlStr += "</div>";
      //   // };
      //   // $("#men").attr(htmlStr);
        
      //     for(var i = 0; i < 20; i++) {

      //         // var name = data[i].title;
      //         // var price = data[i].price
      //         if (data[i].category === "men's clothing") {
      //           $('#men').append(`
      //         <p id='productTitle'> ${data[i].title} </p>
      //         <p id='productDescription'> ${data[i].description} </p>
      //         <img src='${data[i].image}'>
      //         <div>
      //             <form class='form'>
      //                 <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
      //                 <button id='${data[i].id}' type='submit'>Add To Cart</button>
      //             </form>
      //             <p id='productPrice'> $${data[i].price} </p>
      //         </div>
      //         <hr />
      //     `);
      //     };
          

      // });

      // (Suppose to be this link for category jewelry)
      // $.get("https://storetester.herokuapp.com/api/products/category/jewelry", function(people) {   
      //   $.get("https://fakestoreapi.com/products", function(data) {
      //     var htmlStr = "";
        
      //     for(var i = 1; i < 5; i++) {
      //         var name = data[i].title;
      //         var price = data[i].price
              
      //         htmlStr += "<div class='bling m-2 border-0' style='width:200px;'>";
      //         htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
      //         htmlStr += "<div class='card-body'>";
      //         htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
      //         htmlStr += "<p class='card-text'>" + "$" + price + "</p>"; 
      //         htmlStr += "</div>";
      //         htmlStr += "</div>";
      //     };
      //     $("#jewelry").append(htmlStr);
      // });

      // // (Suppose to be this link for category electronic)
      // // $.get("https://storetester.herokuapp.com/api/products/category/electronic", function(people) {   
      // $.get("https://fakestoreapi.com/products", function(data) {
          
      //     var htmlStr = "";
      //     for(var i = 0; i <=0; i++) {
      //       var name = data[17].title;
      //       var price = data[17].price

      //       htmlStr += "<div class='male m-2 border-0' style='width:200px;'>";
      //       htmlStr += "<img src=" + data[17].image +" alt='product image' class='fake'>";
      //       htmlStr += "<div class='card-body'>";
      //       htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
      //       htmlStr += "<p class='card-text'>" +"$" + price + "</p>"; 
      //       htmlStr += "</div>";
      //       htmlStr += "</div>";
      //     };
      //     $("#electronic").attr(htmlStr);

      //     for(var i = 5; i < 11; i++) {
      //         var name = data[i].title;
      //         var price = data[i].price

      //         htmlStr += "<div class='electric m-2 border-0' style='width:200px;'>";
      //         htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
      //         htmlStr += "<div class='card-body'>";
      //         htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
      //         htmlStr += "<p class='card-text'>" + "$" + price + "</p>"; 
      //         htmlStr += "</div>";
      //         htmlStr += "</div>";
      //     };
      //     $("#electronic").append(htmlStr);
      // }, "json");

      var apiKey = '6b71e45e81339efb68c7b8d995519887'


    $('form').submit(function () {
        var city = $('#city').val();
        var cityString = `${city}`

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${apiKey}&units=imperial`

        $.get(url, function (res) {
            console.log(res)
            var htmlString = `<h1>${cityString}</h1><p>Temperature: ${res.main.temp}&#8457;</p>`
            htmlString+= `<p>Description: ${res.weather[0].description}</p><p>Wind Speed: ${res.wind.speed} mph</p>`
            $('#forecast').html(htmlString);

        }, 'json');
        return false;
    });
  
});
