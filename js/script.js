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
        $("#women").fadeToggle();
    });

    $(".men").click(function(){
      $("#men").fadeToggle();
  });

  $(".jewelry").click(function(){
    $("#jewelry").fadeToggle();
});

$(".electronic").click(function(){
  $("#electronic").fadeToggle();
});
    $(document).ready(function() {
      // (Suppose to be this link for category women clothing)
      // $.get("https://storetester.herokuapp.com/api/products/category/women_clothing", function(people) {   
        $.get("https://storetester.herokuapp.com/api/products/", function(people) {
          var data = people.data;
          var htmlStr = "";
          for(var i = 11; i <=16; i++) {
            var name = data[i].title;
            var price = data[i].price

            htmlStr += "<div class='female m-2 border-0' style='width:200px;'>";
            htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
            htmlStr += "<div class='card-body'>";
            htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
            htmlStr += "<p class='card-text'>" + price + "</p>"; 
            htmlStr += "</div>";
            htmlStr += "</div>";
        };
        $("#women").append(htmlStr);
      });

      // (Suppose to be this link for category men_clothing)
      // $.get("https://storetester.herokuapp.com/api/products/category/men_clothing", function(people) {   
        $.get("https://storetester.herokuapp.com/api/products", function(people) {
          var data = people.data;
          var htmlStr = "";

          for(var i = 0; i <=0; i++) {
            var name = data[0].title;
            var price = data[0].price

            htmlStr += "<div class='male m-2 border-0' style='width:200px;'>";
            htmlStr += "<img src=" + data[0].image +" alt='product image' class='fake'>";
            htmlStr += "<div class='card-body'>";
            htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
            htmlStr += "<p class='card-text'>" + "$" + price + "</p>"; 
            htmlStr += "</div>";
            htmlStr += "</div>";
        };
        $("#men").attr(htmlStr);
        
          for(var i = 18; i < 20; i++) {
              var name = data[i].title;
              var price = data[i].price

              htmlStr += "<div class='male m-2 border-0' style='width:200px;'>";
              htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
              htmlStr += "<div class='card-body'>";
              htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
              htmlStr += "<p class='card-text'>" + price + "</p>"; 
              htmlStr += "</div>";
              htmlStr += "</div>";
          };
          $("#men").append(htmlStr);

      });

      // (Suppose to be this link for category jewelry)
      // $.get("https://storetester.herokuapp.com/api/products/category/jewelry", function(people) {   
        $.get("https://storetester.herokuapp.com/api/products", function(people) {
          var data = people.data;
          var htmlStr = "";
        
          for(var i = 1; i < 5; i++) {
              var name = data[i].title;
              var price = data[i].price

              htmlStr += "<div class='bling m-2 border-0' style='width:200px;'>";
              htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
              htmlStr += "<div class='card-body'>";
              htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
              htmlStr += "<p class='card-text'>" + price + "</p>"; 
              htmlStr += "</div>";
              htmlStr += "</div>";
          };
          $("#jewelry").append(htmlStr);
      });

      // (Suppose to be this link for category electronic)
      // $.get("https://storetester.herokuapp.com/api/products/category/electronic", function(people) {   
      $.get("https://storetester.herokuapp.com/api/products", function(people) {
          var data = people.data;
          var htmlStr = "";
          for(var i = 0; i <=0; i++) {
            var name = data[17].title;
            var price = data[17].price

            htmlStr += "<div class='male m-2 border-0' style='width:200px;'>";
            htmlStr += "<img src=" + data[17].image +" alt='product image' class='fake'>";
            htmlStr += "<div class='card-body'>";
            htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
            htmlStr += "<p class='card-text'>" +"$" + price + "</p>"; 
            htmlStr += "</div>";
            htmlStr += "</div>";
          };
          $("#electronic").attr(htmlStr);

          for(var i = 5; i < 11; i++) {
              var name = data[i].title;
              var price = data[i].price

              htmlStr += "<div class='electric m-2 border-0' style='width:200px;'>";
              htmlStr += "<img src=" + data[i].image +" alt='product image' class='fake'>";
              htmlStr += "<div class='card-body'>";
              htmlStr += "<h5 class='card-title margin:10px'>" + name + "</h5>";
              htmlStr += "<p class='card-text'>" + "$" + price + "</p>"; 
              htmlStr += "</div>";
              htmlStr += "</div>";
          };
          $("#electronic").append(htmlStr);
      }, "json");

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
  