var nyt-api-key = "5e3993ef530f4bffb71217a3629d974e"; // If you wanna sing out, sing out.

function makeRow(date, headline, author, link) {
  var row = "<tr><td>" + date + "</td><td>" + headline + "</td><td>" + author + "</td><td>" + link + "</td></tr>";
  return row;
}
function toTable(html) {
  $("#table").html("<tr><th>Date</th><th>Headline</th><th>Author</th><th>Link</th></tr>" + html);
}
$("#submit").click(function(event) {
  var qry = $("#search").val();
  var qty = $("#qty").val();
  var start = $("#start").val();
  var end = $("#end").val();
  var apiurl = "http...search=" + escape(qry) + "&qty=" + qty + "&start=" + start + "&end=" + end;
  $.get(apiurl)
    .done(function(r) {
      for (var i = 0; i < r.data.length; i++) {
        
      }
    });
});
