$(document).ready(function(){
   $('.btn-filter').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
         $('.filter').show('1000');
      }
      else{
         $('.filter').not('.' + value).hide('1000');
         $('.filter').filter('.' + value).show('1000');
      }
   })
   // add active class on selected item
   $('.btn-filter').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
   })
})
