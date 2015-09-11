/*
****
Author: ARUN.G
07/08/2015 3:17PM GMT+5.30
****
 */

function connect(e)
{
var term= {button:e};
$.ajax({
url:'http://www.indiageeks.in/tutorials/reply.php',
type:'POST',
data:term,
dataType:'json',
error:function(jqXHR,text_status,strError){
alert(“no connection”);},
timeout:60000,
success:function(data){
$("#result").html("");
for(var i in data){
$("#result").append("<li>"+data[i]+"</li>");
}
}
});}    