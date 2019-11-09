var data = {
    email : 'zogzmiller+ta@gmail.com',
    password : '********'
};

fetch(myRequest)
.then(function(response) {
  if (!response.ok) {
    throw new Error('HTTP error, status = ' + response.status);
  }
  return response.blob();
})
.then(function(response) {
  let objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});