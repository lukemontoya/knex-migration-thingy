var za = 0;
var zb = 0;
var currFruit="";
var currPrice=0;
var currName="";



fetch('https://agile-inlet-36787.herokuapp.com/get_fruits.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    let top = document.querySelector(".top_box")
    let fruitResults = myJson.data;

      for (var i = 0; i < fruitResults.length; i++) {
        // create a div
        // console.log(fruitResults[i].name);
        let div = document.createElement("div");
          div.setAttribute("class", "fruit_item")
          div.setAttribute("title", fruitResults[i].name)
          div.setAttribute("price", fruitResults[i].price)
          div.setAttribute("url", fruitResults[i].url)
          top.appendChild(div)

        // create an image element
        var fruit_img = document.createElement("img");
        // set the src attribute of the image
          fruit_img.setAttribute("src", fruitResults[i].url);
          fruit_img.setAttribute("id", fruitResults[i].name);
          fruit_img.setAttribute("price", fruitResults[i].price);
          // console.log(fruit_img)
          // append the image to the div,
          div.appendChild(fruit_img);

        let div_name = document.createElement("div");
          div_name.setAttribute("style", "text-align:center");
          div.appendChild(div_name);
          div_name.innerHTML = fruitResults[i].name;


        fruit_img.addEventListener("click", function(){
          let fruit_url = event.target.src;
          let z1 = document.querySelector(".z1");
          let z2 = document.querySelector(".z2");
          let zname1 = document.querySelector(".zname1");
          let zname2 = document.querySelector(".zname2");
          var price1 = document.querySelector(".total");

          let fruit_choice1 = document.createElement("img");
          let beverage_price= Number(event.target.attributes.price.value);
          let beverage_name = event.target.id;
          // console.log('price', beverage_price)

          fruit_choice1.setAttribute("src", fruit_url);

          if(za === 0){
          currFruit=fruit_choice1
          z1.appendChild(currFruit);
          currName=beverage_name;
          zname1.innerHTML=currName;
          currPrice=Number(event.target.attributes.price.value);
          // console.log(currPrice)
          price1.innerHTML=currPrice;
          za++;

        } else if(zb === 0){
          z2.appendChild(fruit_choice1);
          if(beverage_name !== currName){
            zname2.innerHTML="and " + beverage_name;

          }

          beverage_price=Number(event.target.attributes.price.value);
          price1.innerHTML=parseFloat(currPrice + beverage_price).toFixed(2);
          zb++;
        } else {
          z2.innerHTML="";
          z2.appendChild(currFruit);
          z1.innerHTML="";
          z1.appendChild(fruit_choice1);
          currFruit=fruit_choice1;
          console.log(currName, beverage_name)
          if(currName === beverage_name){
            zname2.innerHTML="";
            zname1.innerHTML="";
            zname1.innerHTML=beverage_name;
            currName=beverage_name;
          } else {
            zname2.innerHTML="";
            zname2.innerHTML="and " + currName;
            zname1.innerHTML="";
            zname1.innerHTML=beverage_name;
            currName=beverage_name;
          }



          price1.innerHTML="";
          beverage_price = currPrice;
          currPrice=Number(event.target.attributes.price.value);
          price1.innerHTML= parseFloat(currPrice + beverage_price).toFixed(2);
          console.log(currPrice, beverage_price);

      }
    })
  }
      let cooler = document.querySelector("#cooler")
      cooler.addEventListener("click", function(){
        var drink_type=document.querySelector(".drink_type")
        drink_type.innerHTML= "Cooler";
      })
      let spritzer = document.querySelector("#spritzer")
      spritzer.addEventListener("click", function(){
        var drink_type=document.querySelector(".drink_type")
        drink_type.innerHTML= "Spritzer";
      })
      let boones = document.querySelector("#boones")
      boones.addEventListener("click", function(){
        var drink_type=document.querySelector(".drink_type")
        drink_type.innerHTML= "Boone's";
      })

      var clear = document.querySelector("#clear");
      clear.addEventListener("click", function(){
        var price1 = document.querySelector(".total");
        var drink_type=document.querySelector(".drink_type")
        let zname1 = document.querySelector(".zname1");
        let zname2 = document.querySelector(".zname2");
        let z1 = document.querySelector(".z1");
        let z2 = document.querySelector(".z2");

        za = 0;
        zb = 0;
        currPrice=0;
        beverage_price=0;
        currFruit="";
        price1.innerHTML="0.00"
        drink_type.innerHTML= "";
        zname1.innerHTML="";
        zname2.innerHTML="";
        z1.innerHTML="";
        z2.innerHTML="";
        console.log(currPrice);

    })
})
