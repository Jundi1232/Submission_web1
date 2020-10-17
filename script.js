$('.page-scroll').on('click', function(e) {

  console.log('ok');
 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 });
 e.preventDefault();
});
