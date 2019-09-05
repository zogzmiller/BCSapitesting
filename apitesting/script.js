var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('POST', 'https://bootcampspot.com/api/instructor/v1/me', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    console.log(data)
}

// Send request
request.send()