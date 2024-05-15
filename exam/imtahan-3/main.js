const aboutCountry=document.querySelector(".about-country");



fetch("https://restcountries.com/v3.1/name/azerbaijan")
.then(res=>res.json())
.then(data=>data.forEach(element => {
   aboutCountry.innerHTML=`
   <div class="about">
   <h1>${element.official}</h1>
   <img src="${element.maps.openStreetMaps}" alt="">
   <span>${element.area}</span>
   <img src="${element.flags.png}" alt="">
   <p>${element.capital}</p>
</div>
   ` 
}))