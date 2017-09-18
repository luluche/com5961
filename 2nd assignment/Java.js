   var aside2 = document. getElementById("aside2");
   var firstbar = document. getElementById("firstbar");
   var aside3 = document. getElementById("aside3");
   var ourheadline= document. getElementById("ourheadline");
    var ourbutton = document. getElementById("ourbutton");
    var newItemCounter=1;

        function aside2_onMouseOver() {
          aside2.className= "newstyle";
          aside2. innerHTML= "<h2> Be Yourself</h2><p>Always Aim for the Best!</p>"
        }

        function aside2_onMouseOut(){
          aside2.className= "defaultstyle";
          aside2.innerHTML= "<h2> Be Yourself</h2><p>See what is look like.</p>"
        }

        
         function myFunction() {
         document.getElementById("firstbar").style.direction = "rtl";
         document.getElementById("firstbar").style.backgroundColor = "lightblue";
}

function aside3_onMouseOver(){
	aside3.className= "foreverstyle";
	aside3.innerHTML= "<h2>Amazing!</h2><p>Zoom in all the time~</p>"
}

function aside3_onMouseOut(){
	aside3.className= "restyle";
	aside3.innerHTML= "<h2>Amazing!</h2><p>Find something in Footer</p>"
}

            var x1= prompt("Enter x1 value=","");
            var x2= prompt("Enter x2 value=","");
            var x3= prompt("Enter x3 value=","");
            var y =(parseInt(x1)+ parseInt(x2))/x3;
            document.getElementById('local').innerHTML= " y=(x1+ x2)/3 ="+y;


            ourbutton.addEventListener("click", CreateNewItem);

            function CreateNewItem(){
            	ourheadline.innerHTML += "<li>somethinfg new" + newItemCounter + "</li>";
            	newItemCounter++;
            }

       
       

    


   