$(document).ready(() => {
console.log("Sanity Check: JS is working!");

const handleSuccess = json =>
  json.forEach(album => {
    let title = album.title;
    $('.container').append(`<h3>${title}</h3>`);
  });

const handleError = (xhr, status, errorThrown) => console.log('uh oh');

const handleSuccess2 = json =>
  json.forEach(taqueria => {
    let name = taqueria.name;
    $('.container').prepend(`<h3>${name}</h3>`);
  });

$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });

$.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/taquerias',
  success: handleSuccess2,
  error: handleError
});


});
