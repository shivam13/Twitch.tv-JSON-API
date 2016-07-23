$(document).ready(function() {
  var ch = ["Saeruman", "FreeCodeCamp", "LIRIK", "IzakOOO", "TSM_Doublelift", "SayNoToRage", "Foxyzilla", "MLG_Patron", "LadyLegacy93", "DIaRD80000", "Castro_1021", "Krayn_Live"];
  var chstate;
  for (var i = 0; i < ch.length; i++) {
    var url = 'https://api.twitch.tv/kraken/streams/' + ch[i] + '?callback=?';

    $.getJSON(url, function(data) {
      if (data.stream != null) {
        chstate="Online";
        $.getJSON(data._links.channel, function(json2) {
        $('#online').prepend("<li id='on'><div class='col-sm-3'><img src="+json2.logo+"></div><div id='status' class='col-sm-3'><a target='_blank' href="+json2.url+">"+json2.display_name+"</a></div><div id='status' class='col-sm-6'>"+json2.status+"</div></li>");
        });
      }
      else{
     chstate="Offline";
      $.getJSON(data._links.channel, function(json) {
      $('#offline').prepend("<li id='off'><div class='col-sm-3'><img src="+json.logo+"></div><div id='status' class='col-sm-3'><a target='_blank' href="+json.url+">"+json.display_name+"</a></div><div id='status' class='col-sm-6'>"+chstate+"</div></li>");
        });
      }
    });
  }
});
