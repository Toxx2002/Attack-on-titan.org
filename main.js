
var board=document.querySelector(".read");
var writer=document.querySelector(".p");




async function api(param) {
  
  const response = await   fetch("https://aot-api.vercel.app/quote")
  const data = await response.json()
  //console.log(data)
  //document.write(data.quote)
  var quotes= data.quote
  var r= data.author
writer.innerHTML=r
  board.innerHTML=quotes
}
