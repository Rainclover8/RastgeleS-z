const day = document.getElementById('day')
const randomBtn = document.querySelector('.random')
const GüncelGün = document.getElementById('günn')

deneme = new Date;

console.log(deneme);

let sözler = [
`Kim tanır bizi şimdiden sonra ?`,
   
`Meğer hayat dediğin sadece gözlerinden ibaretmiş.`,
   
`Ben ağlarken yanımda yoksan, ben gülerken de gölge yapma.`,
    
`Daimi mutluluk kendinde bulduğundur `,

`Unutulmak kadar acıdır bazen yaşamak.`,

`Karakteri menfaatlerine göre şekillenen insanlar var.`,

`Sen aklım ve kalbim arasında kalan en güzel çaresizliğimsin.`,

`Ömrü bitene kadar sevmeli insan. Menfaatleri bitene kadar değil.`,
]




let gün = deneme.getDay()
console.log(sözler[gün]); 
let olay = sözler[gün]
// console.log(gün);

GüncelGün.innerHTML = `Gün #${gün}`

function günüYenile(){
   setTimeout(() =>{
    day.innerText = ` " ${olay} "`
   },100)
}
günüYenile()

randomBtn.addEventListener('click', ()=>{
   let random = Math.floor(Math.random(sözler) * 7)
   let rastgeleSözBtn = sözler[random];
   let newWrite = document.querySelector('.yeni')

   newWrite.innerHTML = `" ${rastgeleSözBtn} "`
   console.log(random);
})