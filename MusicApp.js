//if going this route, need to setup control buttons for pause also
//check out API options http://www.w3schools.com/tags/ref_av_dom.asp
$('#deathcab').click(function(){
  $('#dcsound').get(0).play();
});

$('#goodgirl').click(function(){
  $('#ggsound').get(0).play();
});