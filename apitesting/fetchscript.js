var url = 'https://bootcampspot.com/api/instructor/v1/login';
var logindata = {
    email : 'zogzmiller+ta@gmail.com',
    password : '*********'
};
const request = new Request(
    url,
    { method: 'POST', body: JSON.stringify(logindata), headers : {'Content-Type': 'application/json'}}
);
// fetch(request)
//     .then(res => res.json())
//     .then(response => console.log(JSON.stringify(response)))
//     .catch(error => console.error('Error:', error));
!async function() {

    let data = await fetch(request)
    .then((res) => res.json())
    .then(data => {
        return data
    })
    .catch(error => 
        {console.error('Error:', error)
    });

    let userID = data['authenticationInfo'].userId
    let userAuthToken = data['authenticationInfo']['authToken']
    console.log(data)


    let meData = await fetch('https://bootcampspot.com/api/instructor/v1/me', {
        method : 'GET',
        headers : {'Content-Type': 'application/json',
                    'authToken' : userAuthToken}
    })
    .then((res) => res.json())
    .then(meData => {
        return meData
    })
    .catch(error => 
        {console.error('Error:', error)
    });
    let usercourseId = meData['enrollments'][0]['courseId']
    let enrollmentId = meData['enrollments'][0]['id']
    console.log(meData)
    let courseIdBody = {'courseId' : usercourseId}
    let enrollmentIdBody = {'enrollmentId' : enrollmentId}


    let attendanceData = await fetch('https://bootcampspot.com/api/instructor/v1/attendance', {
        method : 'POST',
        body: JSON.stringify(courseIdBody),
        headers : {'Content-Type': 'application/json',
                    'authToken' : userAuthToken}
    })
    .then((res) => res.json())
    .then(attendanceData => {
        return attendanceData
    })
    .catch(error => 
        {console.error('Error:', error)
    });
    console.log(attendanceData)


    let gradesData = await fetch('https://bootcampspot.com/api/instructor/v1/grades', {
        method : 'POST',
        body: JSON.stringify(courseIdBody),
        headers : {'Content-Type': 'application/json',
                    'authToken' : userAuthToken}
    })
    .then((res) => res.json())
    .then(gradesData => {
        return gradesData
    })
    .catch(error => 
        {console.error('Error:', error)
    });
    console.log(gradesData)


    let sessionsData = await fetch('https://bootcampspot.com/api/instructor/v1/sessions', {
        method : 'POST',
        body: JSON.stringify(enrollmentIdBody),
        headers : {'Content-Type': 'application/json',
                    'authToken' : userAuthToken}
    })
    .then((res) => res.json())
    .then(sessionsData => {
        return sessionsData
    })
    .catch(error => 
        {console.error('Error:', error)
    });
    console.log(sessionsData)


    let assignmentsData = await fetch('https://bootcampspot.com/api/instructor/v1/assignments', {
        method : 'POST',
        body: JSON.stringify(enrollmentIdBody),
        headers : {'Content-Type': 'application/json',
                    'authToken' : userAuthToken}
    })
    .then((res) => res.json())
    .then(assignmentsData => {
        return assignmentsData
    })
    .catch(error => 
        {console.error('Error:', error)
    });
    console.log(assignmentsData)
}();
