var url = 'https://bootcampspot.com/api/instructor/v1/login';
var logindata = {
    email : 'zogzmiller+ta@gmail.com',
    password : 'L0ppern!234'
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
    var gradesdict = {}
    gradesData.forEach(function(item){
        let assignment = item.assignmentTitle
        if (assignment in gradesdict);

        else
            gradesdict[assignment] = [];

        gradesdict[assignment].push({'student' : item.studentName,
        'grade' : item.grade});
    })


    const keys = Object.keys(gradesdict)
    d3.select("tbody")
    .selectAll("tr")
    .data(keys)
    .enter()
    .append("tr")
    .html(function(d) {
        return `<th>${d}</th>`;
    });
    const entries = Object.entries(gradesdict)
    console.log(entries)
    entries.forEach(function(item){
        studentsgrade = []
        item[1].forEach(function(inneritem){
            studentsgrade.push(inneritem)
        })
        d3.select("tbody")
        .selectAll('tr')
        .selectAll('td')
        .data(studentsgrade)
        .enter()
        .append('td')
        .html(function(d) {
            return `<td>${d.grade}</td>`;
        });
    });
    d3.select("thead")
    .selectAll("th")
    .data(studentsgrade)
    .enter()
    .append("th")
    .html(function(d){
        return `<th>${d.student}</th>`
    });
    // for (const key of keys) {

    //     const values = Object.values(gradesdict[key]);

    //     values.forEach(function(studentgrade){
    //         let student = studentgrade.student
    //         let grade = studentgrade.grade
    //         console.log(values)
    //         // d3.select("thead")
    //         // .selectAll("tr")
    //         // .data(values)
    //         // .enter()
    //         // .append("th")
    //         // .html(function(d) {
    //         //     return `<tr>${d.student}</tr>`;
    //         // });
            // d3.select("tbody")
            // .selectAll("tr")
            // .data(values)
            // .enter()
            // .html(function(d) {
            //     return `<tr>${d.grade}</tr>`;
            // });
    //     });
    // };

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
    return gradesdict
}();
