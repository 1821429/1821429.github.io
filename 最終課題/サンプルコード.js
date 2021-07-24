


var kakuritu = Math.floor(Math.random()*99);

function kyoka(kakuritu){
var message=""

var kakuritu = Math.floor(Math.random()*99);

if( kakuritu == 0 ){
message="強化成功"

}else{
    message="強化失敗"
}

console.log(message)

var el = document.getElementById("text")
el.innerHTML = message
}


