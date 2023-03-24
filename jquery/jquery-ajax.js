let data;
$(document).ready(function(){
   $("button").click(function(){
    $.ajax({url:"./User.json",success:function(result){
      data=result;
      console.log(data);
    }});
   });
  });

  let input;
  $("#getuser").click(function(){
    input=$("#input-field").val();
    console.log(input);

    for(let i=0;i<data.length;i++){
        if(input=== data[i].username){
           console.log(...data[i].username)
           $("#user").text(data[i].name)
        }
    }
  })
