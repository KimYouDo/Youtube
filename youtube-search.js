var myVariable;
myVariable ="Kim";

//alert("Hello world");



function sayHi(){
console.log("Hello JS");
}

sayHi();


function getSum(a,b){
return a+b;
}

const result = getSum("1","2");
console.log(result);


function isEnd(value, cb){
console.log(value);

cb(value+' new!!');
}

isEnd('Take a break', function(data){
console.log(data+',OK!');
});


var btn = document.querySelector('button');

btn.inclick = function(){
alert("Hello world!!!!!");
}

$(function(){

var apikey ="AIzaSyDUOF7rRT1ANL3hmPZWKtVNJdKxJk1YAWs"
var  apiYoutube ="https://www.googleapis.com/youtube/v3/search"
$('form').submit(function(ev){
   ev.preventDefault();
var query = $('#query').val();
// console.log(query);

search(query);

})


function search(query){

$.get(
  apiYoutube,{
    part: 'snippet',
    q : query,
    type : 'video',
    maxResults : 10,
    key : apikey
    },
    function(data){
     //console.log(data.items);

     $('#results').empty();
 
$.each(data.items, function(index, item){
 var newItem = builItem(item);
$('#results').append(newItem)
})
    },'json')
}






var builItem = function(item){
var videoId = item.id.videoId;
var thumbnail = item.snippet.thumbnails.default.url;
var title = item.snippet.title;
var description = item.snippet.description;
//console.log("====================================");
//console.log(videoId, thumbnail, title, description);

var newItem =` <li class="item">
          <a href="http://www.youtube.com/watch?v=${videoId}" target="_blank">
          <h3>${title}</h3>
          <div class="image-wrapper">
            <img src="${thumbnail}">
          </div>
          <div class="description">
            ${description}
          </div>
        </a></li>`;

return newItem;
}
/*
var myObj = {
 "name" : "Lee",
 "age" : "50",
 "school" :
   {
   "mid": "M",
   "high" : "H"
   }
  };

alert(myObj['name']);
alert(myObj.age);
alert(myObj.school.high);
*/

});