function makeRow(date, headline, link) {
  var row = "<tr><td>" + date + "</td><td>" + headline + "</td><td>" + link + "</td></tr>";
  return row;
}
function toTable(html) {
  $("#output").html("<tr><th>Date</th><th>Headline</th><th>Link</th></tr>" + html);
}
$(document).ready(function(){
  $("#submit").click(function(event) {
    console.log("click");
    var qry = $("#search").val();
    var qty = $("#qty").val();
    var start = $("#start").val() + "0101";
    var end = $("#end").val() + "0101";
    var apiurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    apiurl+= '?' + $.param({
      'api-key': "5e3993ef530f4bffb71217a3629d974e",
      'q' : $("#search").val(),
      'begin_date': $("#start").val() + "0101",
      'end_date': $("#end").val() + "0101"
    });
    console.log(apiurl);
    $.get(apiurl)
      .done(function(r) {
        var rows;
        for(var i = 0; i < qty; i++){
          rows += makeRow(r.response.docs[i].pub_date, r.response.docs[i].headline.main, r.response.docs[i].web_url);
        }
        toTable(rows);
      });

  });
});
