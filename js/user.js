var app = new Framework7();
var $$= Dom7;
sesuatu=new app.request.get('https://ghibliapi.herokuapp.com/films', function (data) {
  var data =JSON.parse(data);
  data.forEach(movie=>{
    const ini=document.getElementById('root');
    const container=document.createElement('div');
    container.setAttribute('class','container');
    ini.appendChild(container);
    const p=document.createElement('P');
    movie.description=movie.description.substring(0,300);
    p.textContent= movie.description;
    ini.appendChild(p)
    
});
console.log(data);
});
