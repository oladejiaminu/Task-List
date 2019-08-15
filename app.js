$("button").on("click",function( e){
e.preventDefault();
let userText =$("input").val();

$("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${userText} </li>`);
$("input").val("");
});
     $("ul").on("click", "li",function(){
         $(this).toggleClass("design");
     })
     $("ul").on("click", "span",function(e){
         $(this).parent().fadeOut(500, function(){
            $(this).remove();  
         })

e.stopPropagation();
     })