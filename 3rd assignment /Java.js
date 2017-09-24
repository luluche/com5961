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

           


            ourbutton.addEventListener("click", CreateNewItem);

            function CreateNewItem(){
            	ourheadline.innerHTML += "<li>somethinfg new" + newItemCounter + "</li>";
            	newItemCounter++;
            }

            
            var x1= prompt("Enter x1 value=","");
            var x2= prompt("Enter x2 value=","");
            var x3= prompt("Enter x3 value=","");
            var y =(parseInt(x1)+ parseInt(x2))/x3;
            document.getElementById('local').innerHTML= " y=(x1+ x2)/3 ="+y;


          
     
  function myFunction(){
    var x = document. getElementById("myName").value;
    document.getElementById("changechart").innerHTML = "Your Name is: " + x;
    document.getElementById("changechart").style.backgroundColor = "lightgreen";
 }

  function myFunction2(){
    var x = document. getElementById("myLocation").value;
    document.getElementById("aside2").innerHTML = "Your Location is: " + x;
    document.getElementById("aside2").style.backgroundColor = "lightyellow";
 }

  function myFunction3(){
    var x = document. getElementById("myPosition").value;
    document.getElementById("aside3").innerHTML = "Your Position is: " + x;
    document.getElementById("aside3").style.backgroundColor = "lightblue";
 }


function mySubmit(){
   alert("The form is submitted");
   var x1 = document. getElementById("myName").value;
   var x2 = document. getElementById("myLocation").value;
   var x3 = document. getElementById("myPosition").value;
   document.getElementById("firstbar").innerHTML = "<li>Your Result is: </li>"+"<li><br>Enter Name: </li>" +  x1 + "<li><br> Location: </li>" + x2 + "<li><br>Position: </li> " + x3;
   document.getElementById("firstbar").style.color = "yellow";
   document.getElementById("firstbar").style.fontStyle = "initial";
   
}



function myReset() {
   alert("The form is reset");
}

function mysun(x) {
    document.getElementById(x).style.background = "yellow";
}






       
       

    


   