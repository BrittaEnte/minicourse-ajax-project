
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $("#street").val();
    var cityStr = $("#city").val()
    var adress = streetStr + "," + cityStr;

    $greeting.text("so you want to live" +  adress + "?");

    var streetviewUrl ='http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + adress + '';
    $body.append('<img class="bimg" src="' + streetviewUrl + '">');
    // YOUR CODE GOES HERE!

    var nytimesUrl= 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=news&api-key=e62e8235fb2e4873a31f1c1acb18b536'
    $.getJSON( "nytimesUrl", function( data ) {
        $nytHeaderElem.text('new york times article about' + cityStr);

        articles = data.response.docs;
        for ( var i = 0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class ="article">'+
                '<a href ="'+ article.web_url + '"> '+ article.headline.main + '</a>' + '<p>'+ article.snippet + '</p>'+ '</li>');          
        };
    });

    return false; 
    }; 

$('#form-container').submit(loadData);
    

    


