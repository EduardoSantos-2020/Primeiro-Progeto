$(window).ready(()=>{
objetoStr=sessionStorage.getItem('produts')
 objeto=JSON.parse(objetoStr)

obj=`${objeto.title}\n${objeto.name}\n${objeto.image}\n${objeto.price}`

console.log(obj);

})