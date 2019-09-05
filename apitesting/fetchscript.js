var url = 'https://bootcampspot.com/api/instructor/v1/login';
var data = {
    "email" : "zogzmiller+ta@gmail.com",
    "password" : "L0ppern1991"
};
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));