var url = 'https://bootcampspot.com/api/instructor/v1/login';
var data = {
    email : 'zogzmiller+ta@gmail.com',
    password : '********'
};
const request = new Request(
    url,
    { method: 'POST', body: JSON.stringify(data), headers : {'Content-Type': 'application/json'}}
);
fetch(request)
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

