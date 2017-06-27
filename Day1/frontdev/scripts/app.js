/**
 * Created by Gianina.Carp on 6/27/2017.
 */
 var employeesList = [
    {
        firstName : "John",
        lastName : "King",
        phone : "0247527524",
        salary : 4500,
        euroValue: 0
    },

    {
        firstName : "Steven",
        lastName : "Gerard",
        phone : "0247585824",
        salary : 4500,
        euroValue: 0
    },

    {
        firstName : "Mike",
        lastName : "Bob",
        phone : "0247527524",
        salary : 4500,
        euroValue: 0
    },

    {
        firstName : "Diana",
        lastName : "Ross",
        phone : "0247527524",
        salary : 4500,
        euroValue: 0
    },

    {
        firstName : "Emily",
        lastName : "Hudson",
        phone : "0247527524",
        salary : 4500,
        euroValue: 0
    }
];



function showList() {
    myTable = '<table class = "table" border = "1"> <tr> <th> First Name </th>' +
        '<th>Last Name </th>' +
        '<th> Phone </th>' +
        '<th> Salary </th>' +
        '<th> Euro Value </th></tr>';
    for (var i in employeesList) {
        myTable += '<tr> <td> ' + employeesList[i].firstName + '</td><td>'
            + employeesList[i].lastName + '</td><td>'
            + employeesList[i].phone + '</td><td>'
            + employeesList[i].salary + '</td><td>'
            + employeesList[i].euroValue + '</td></tr>';
    }

    myTable += '</table>';
    console.log(employeesList.length);
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

    var Employee = function (firstName, lastName, phone, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.salary = salary;
        this.euroValue = 0;
    }

    function addEmployee () {
        var fisrtName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var salary = document.getElementById("salary").value;
        employeesList.push(new Employee (fisrtName, lastName, phone, salary));
        showList();
    }

    function salaryTotal(){
        var sal = 0;
        for (var i in employeesList) {
            sal += employeesList[i].salary;
        }
        var total = document.getElementById("salarytotal");
        total.innerHTML = sal;
    }

    function deleteEmployee(){
        employeesList.pop();
        showList();
    }

    function convert(){
        for (var i in employeesList) {
            employeesList[i].euroValue = employeesList[i].salary/4.5;
        }
        showList();
    }
