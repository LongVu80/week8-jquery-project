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
		for (var i = 0; i < data.length; i++) {
      function appear(){
        document.getElementById('product').innerHTML += `<div class='card m-2 border-2' style='width:200px;'>
          <img src='${data[i].image}' class='fake'>
          <div class='card-body'>
          <p class ='card-title' id='productTitle'> ${data[i].title} </p>
          <p class='card-text' id='productPrice'> $${data[i].price} </p>
          <button class='add-cart'> add to cart </button>`;
    };
      appear();



      

        let carts = document.querySelectorAll('.add-cart');
        let products = [
          {
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            price: 56.99,
            tag: "snowJacket",
            inCart: 0
          },
          {
            title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            price: 29.95,
            tag: "bikerJacket",
            inCart: 0
          },
          {
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            price: 39.99,
            tag: "rainCoast",
            inCart: 0
          },
          {
            title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
            price: 9.85,
            tag: "shortV",
            inCart: 0
          },
          {
            title: "Opna Women's Short Sleeve Moisture",
            price: 7.95,
            tag: "Opna",
            inCart: 0
          },
          {
            title: "DANVOUY Womens T Shirt Casual Cotton Short",
            price: 12.99,
            tag: "womanTshirt",
            inCart: 0
          },
            {
                title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                price: 109.95,
                tag: "Fjallraven",
                inCart: 0
              },
              {
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                price: 22.3,
                tag: "menTshirt",
                inCart: 0
              },
              {
                title: "Mens Cotton Jacket",
                price: 55.99,
                tag: "menCotton",
                inCart: 0
              },
              {
                title: "Mens Casual Slim Fit",
                price: 15.99,
                tag: "mensCasual",
                inCart: 0
              },
              {
                title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                price: 695,
                tag: "nagaGold",
                inCart: 0
              },
              {
                title: "Solid Gold Petite Micropave ",
                price: 168,
                tag: "micropave",
                inCart: 0
              },
              {
                title: "White Gold Plated Princess",
                price: 9.99,
                tag: "goldPlate",
                inCart: 0
              },
              {
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                price: 10.99,
                tag: "owlGold",
                inCart: 0
              },
              {
                title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
                price: 64,
                tag: "usb3",
                inCart: 0
              },
              {
                title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
                price: 109,
                tag: "sataIII",
                inCart: 0
              },
              {
                title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
                price: 109,
                tag: "Boost",
                inCart: 0
              },
              {
                title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
                price: 114,
                tag: "gameDrive",
                inCart: 0
              },
              {
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 599,
                tag: "acer",
                inCart: 0
              },
              {
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 999.99,
                tag: "samMonitor",
                inCart: 0
              }
            ]

        for(let i = 0; i < carts.length; i++){
            carts[i].addEventListener('click', () => {
                cartNumbers(products[i]);
                totalCost(products[i])
            });
        };
        
        function onloadCartNumbers(){
            let productNumbers = localStorage.getItem('cartNumbers');
            if(productNumbers){
                document.querySelector('.cart span').textContent = productNumbers;
            };
        };

        function cartNumbers(product){
            let productNumbers = localStorage.getItem('cartNumbers');
            productNumbers = parseInt(productNumbers);
            if(productNumbers){
                localStorage.setItem('cartNumbers', productNumbers + 1);
                document.querySelector('.cart span').textContent = productNumbers + 1;
            } else {
                localStorage.setItem('cartNumbers', 1);
                document.querySelector('.cart span').textContent = 1;
            };
            setItems(product);
        };

        function setItems(product){
            let cartItems = localStorage.getItem('productsInCart');
            cartItems = JSON.parse(cartItems);
            
            if(cartItems != null){
                if(cartItems[product.tag] == undefined){
                    cartItems = {
                        ...cartItems,
                        [product.tag]: product
                    };
                };
                cartItems[product.tag].inCart += 1;
            } else{
                product.inCart = 1;
                cartItems = {
                    [product.tag]: product
                };
            };
            console.log("my product is", cartItems[product.tag]);
            
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        };

        function totalCost(product){
             console.log("price", product.price);
            let cartCost = localStorage.getItem('totalCost');
            if(cartCost !=null){
                cartCost = parseInt(cartCost);
                localStorage.setItem("totalCost", cartCost + product.price);
            } else {
                localStorage.setItem("totalCost", product.price);
            };
            console.log("cart cost", cartCost);
        };
        onloadCartNumbers();
        };
        
    });
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
