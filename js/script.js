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
		// console.log(data[0].title);
		for (var i = 0; i < data.length; i++) {
			if (data[i].category === "men's clothing") {
				// console.log('hello');
				$('#men').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add To Cart</button>
                `);
			} else if (data[i].category === "women's clothing") {
				// console.log('hello');
				$('#women').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add To Cart</button>
                `);
			} else if (data[i].category === 'jewelery') {
				// console.log('hello');
				$('#jewelery').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add To Cart</button>
                `);
			} else if (data[i].category === 'electronics') {
				// console.log('hello');
				$('#electronic').append(`
                    <div class='card m-2 border-2' style='width:200px;'>
                    <img src='${data[i].image}' class='fake'>
                    <div class='card-body'>
                    <p class ='card-title' id='productTitle'> ${data[i].title} </p>
                    <p class='card-text' id='productPrice'> $${data[i].price} </p>
                    <button class="add-cart${data[i].id} bottom"> Add To Cart</button>
                `);
			};
        let carts = document.querySelectorAll(`.add-cart${data[i].id}`);
        for(let i = 0; i < carts.length; i++){
            carts[i].addEventListener('click', () => {
                cartNumbers(data[i]);
            })
        }

        function onloadCartNumbers(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
                document.querySelector('.cart span').textContent = productNumbers;
            }
        }
        function cartNumbers(data){
            let productNumbers = localStorage.getItem('cartNumbers', 1);

        
            productNumbers = parseInt(productNumbers);
            if(productNumbers){
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.cart span').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.cart span').textContent = 1;
            }
            setItem(data);
        }
        function setItem(data){
            console.log('inside my setItem');
            console.log('my items are:', data);

            // data.rating = 1;
            // let cartItems= {
            //     [data.title]: data
            // }
            // localStorage.setItem("productInCart", JSON.stringify(cartItems));
        }
        onloadCartNumbers();
        };
        
    });

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
