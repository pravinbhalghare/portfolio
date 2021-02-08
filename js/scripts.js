          $(document).ready(function(){
             $("#mycarousel").carousel( {interval:2000 } );
             $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')){
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }                
             });
             $("#login").click(function(){
                $('#loginModal').modal('toggle');
             });
             $("#reserve").click(function(){
                $('#reserveModal').modal('toggle');
             }); 
         });
         var card1 = document.querySelector(".card1");
card1.addEventListener("click", function() {
  card1.classList.toggle("is-flipped1");
  console.log("hello");
});

var card2 = document.querySelector(".card2");
card2.addEventListener("click", function() {
  card2.classList.toggle("is-flipped2");
});

var card3 = document.querySelector(".card3");
card3.addEventListener("click", function() {
  card3.classList.toggle("is-flipped3");
});
