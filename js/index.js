


$(document).ready(function(){

        $( "#draggable" ).draggable();
    $( "#dialog" ).dialog();






  // store the input
  var inputs=[""];
  // string that will br use for eval()//
  var totalString;
  //validation for numbers variable
  var nums = [0,1,2,3,4,5,6,7,8,9];
  // validation of the operators and string when we as back btn
var operators1 = ["+","-","*","/"];
  //validation of decimals
  var operators2 = ["."];
  
  function getValue(input){
  if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
    console.log("doble dot asigned");
  }
  else if(inputs.length === 1 && operators1.includes(input)===false){
    inputs.push(input);
  }
    else if (operators1.includes(inputs[inputs.length-1]) ===false){
      inputs.push(input);
    }
    else if (nums.includes(Number(input))){
       inputs.push(input);
             
             }
  update();
    
  }
  
  function update(){
    totalString = inputs.join("");
    $("#steps").html(totalString);
    console.log(inputs);
  }
  
  function getTotal(){
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
    
    
  }
  
  //target click buttons
  
  $("a").on("click", function (){
    if(this.id ==="delete"){
      inputs=[""];
      update();
    }
    else if(this.id ==="CE"){
      inputs.pop();
      update();
    }
    else if(this.id === "total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+", "-","*","/") ===-1){
         getValue(this.id);
         }
         else{
         getValue(this.id);
         }
    
    }
  
  
  });
  
  
  
});