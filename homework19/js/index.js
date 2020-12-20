console.log("your index.js is loaded corectly")

<script>
$(function(){
  $("#images/bule sin.png").hover(function(){
    $(this).width(1.25*$(this).width());
    $(this).height(1.25*$(this).height());
  }, $(function(){
        $(this).width(0.8*$(this).width());
        $(this).height(0.8*$(this).height());
  });
});
</script>