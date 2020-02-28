var vid = document.getElementById("myVideo"); 
  
  function pauseVid() { 
    vid.pause(); 
  } 
  $(function () {
    $('[data-toggle="popover"]').popover()
  })

 $('.carousel').carousel({
    interval:false
 });
    
    $(document).ready(function() { 
   var $videoSrc;  
   $('.video-btn').click(function() {
       $videoSrc = $(this).data( "src" );
   });
   console.log($videoSrc);
   $('#myModal').on('shown.bs.modal', function (e) {
   $("#videos1").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
   })
   $('#myModal').on('hide.bs.modal', function (e) {
   
       $("#videos1").attr('src',$videoSrc); 
   })  
   });
   
  
   function btn1()
   {
 document.getElementById('button1').innerHTML="0:00PM";
  document.getElementById('button2').innerHTML="1:00PM";
  document.getElementById('button3').innerHTML="2:00PM";
  document.getElementById('button4').innerHTML="3:00PM";
  document.getElementById('button5').innerHTML="4:00PM";
  document.getElementById('button6').innerHTML="5:00PM";


  document.getElementById('button1A').innerHTML="1:10PM";
  document.getElementById('button2B').innerHTML="1:10PM";
  document.getElementById('button3C').innerHTML="2:10PM";
  document.getElementById('button4D').innerHTML="3:20PM";
  document.getElementById('button5E').innerHTML="4:22PM";
  document.getElementById('button6F').innerHTML="5:50PM";
   }
   function btn2()
   {
    document.getElementById('button1').innerHTML="11:00PM";
    document.getElementById('button2').innerHTML="12:00PM";
    document.getElementById('button3').innerHTML="0:00PM";
    document.getElementById('button4').innerHTML="12:00PM";
    document.getElementById('button5').innerHTML="4:05PM";
    document.getElementById('button6').innerHTML="5:07PM";
  
  
    document.getElementById('button1A').innerHTML="1:15PM";
    document.getElementById('button2B').innerHTML="1:15PM";
    document.getElementById('button3C').innerHTML="2:18PM";
    document.getElementById('button4D').innerHTML="3:20PM";
    document.getElementById('button5E').innerHTML="4:28PM";
    document.getElementById('button6F').innerHTML="5:58PM";
   }
   function btn3()
   {
    document.getElementById('button1').innerHTML="01:00PM";
    document.getElementById('button2').innerHTML="02:00PM";
    document.getElementById('button3').innerHTML="0:00PM";
    document.getElementById('button4').innerHTML="02:00PM";
    document.getElementById('button5').innerHTML="0:05PM";
    document.getElementById('button6').innerHTML="0:07PM";
  
  
    document.getElementById('button1A').innerHTML="01:15PM";
    document.getElementById('button2B').innerHTML="01:15PM";
    document.getElementById('button3C').innerHTML="02:18PM";
    document.getElementById('button4D').innerHTML="03:20PM";
    document.getElementById('button5E').innerHTML="04:28PM";
    document.getElementById('button6F').innerHTML="05:58PM";
   }


   $(document).ready(function(){
     $(".tg-0").click(function(){
      $(this).css("background-color", "white");
     });
   });
   
   $(document).ready(function(){
    $(".btns").click(function(){
      $(this).toggleClass("actives");
  
    });
  });