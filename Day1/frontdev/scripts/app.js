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
        firstName : "John",
        lastName : "Bob",
        phone : "0247527524",
        salary : 400,
        euroValue: 0
    },

    {
        firstName : "Diana",
        lastName : "Ross",
        phone : "0247527524",
        salary : 500,
        euroValue: 0
    },

    {
        firstName : "Emily",
        lastName : "Bob",
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
        '<th> Euro Value </th>' +
        '</tr>';
    for (var i in employeesList) {
        myTable += '<tr> <td> ' + employeesList[i].firstName + '</td><td>'
            + employeesList[i].lastName + '</td><td>'
            + employeesList[i].phone + '</td><td>'
            + employeesList[i].salary + '</td><td>'
            + employeesList[i].euroValue + '</td>' +
            '<td> <button onClick = "vizualizare(' + i +')"> Vizualizare </button> </td>'+
            '<td> <button onClick = "deleteItem(' + i +')"> Sterge </button> ' +
            '</tr>';
    }

    myTable += '<tr> <td> ' + selectFirstName() + '</td><td>'
        + numeUnice() + '</td><td>'
        + cifreFrecvente() + '</td><td>'
        + medieSalariu() + '</td>' +
        '</tr>';

    myTable += '</table>';
    // console.log(employeesList.length);
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

    function vizualizare(i) {
        var ditails = '<div class="alert alert-info" role="alert"> '
            + 'First Name: ' + employeesList[i].firstName + '<br>'
            + 'Last Name: ' +employeesList[i].lastName + '<br>'
            + 'Phone:' + employeesList[i].phone + '<br>'
            + 'Salary:' + employeesList[i].salary + '<br>'
            + 'EuroValue:' + employeesList[i].euroValue + '<br>';
        var container = document.getElementById('vizualizareItem');
        container.innerHTML = ditails;
    }

    function deleteItem(i) {
        employeesList.splice(parseInt(i), 1);
        showList();
    }

    function selectFirstName() {
        var names = [{name: employeesList[0].firstName,
            value: 0}];
        var gasit = 0;
        for (var i in employeesList) {
            for (var j in names) {
                if ( employeesList[i].firstName == names[j].name ) {
                    names[j].value += 1;
                    gasit = 1;
                }
            }
            if (gasit == 0){
                names.push({name: employeesList[i].firstName, value: 1});
            } else {
                gasit = 0;
            }
        }

        var max = 0;
        var maxIndex = -1;
        for (var index in names) {
            if (names[index].value > max) {
                max = names[index].value;
                maxIndex = index;
            }
        }

        return names[maxIndex].name;
    }

function numeUnice() {
    var names = [{name: employeesList[0].lastName,
        value: 0}];
    var gasit = 0;
    for (var i in employeesList) {
        for (var j in names) {
            if ( employeesList[i].lastName == names[j].name ) {
                names[j].value += 1;
                gasit = 1;
            }
        }
        if (gasit == 0){
            names.push({name: employeesList[i].lastName, value: 1});
        } else {
            gasit = 0;
        }
    }

    var count = 0;
    for (var index in names) {
        if (names[index].value == 1) {
            count ++;
        }
    }

    return count;
}

function cifreFrecventeee() {
     var cifre = [];
     for (var i = 0; i < 10; i++) {
         cifre[i] = 0;
     }

     for (var anj in employeesList) {
         var phone = employeesList[anj].phone;
         while (phone) {
             cifre[phone % 10]++;
             phone = phone/10;
         }
     }

     var final = cifre;
    for(var i = 0; i<10; i++)
        for(j = i + 1; j<10; j++) {
            if(final[i]>final[j]) {
            var aux = final[i];
            final[i] = final[j];
            final[j] = aux;
            }
        }

    var string_final = "";
    for (var i = 5; i < 10; i++) {
        string_final += cifre.indexOf(final[i]) + ',';
    }

    return string_final;
}

function cifreFrecvente() {
    var cifre =  [{key: 0, value: 0}];
    for (var i = 1; i < 10; i++) {
        cifre.push({key: i, value: 0});
    }

    for (var anj in employeesList) {
        var phone = parseInt(employeesList[anj].phone);
        console.log(phone);
        while (phone) {
            var digit = phone % 10;
            for (var x = 0; x < 10; x++) {
                if (digit == cifre[x].key) {
                    cifre[x].value++;
                    break;
                }
            }
            phone = parseInt(phone/10);
        }
    }

    var string_final = "";
    // var index = 0;
    // for (var i = 0; i < 5; i++){
    //     var max = 0;
    //     for (var j = 0; j < cifre.length; j++) {
    //         if (cifre[j].value >= max){
    //             max = cifre[j].value;
    //             index = j;
    //         }
    //     }
    //     string_final += cifre[index].key + ',';
    //     cifre[index].value = 0;
    // }

    cifre.sort(
        function(a, b){
            if (a.value < b.value) return b.value;
            return a.value;
        });

    string_final += cifre[0].key + ',' + cifre[1].key + ',' + cifre[2].key + ',' + cifre[3].key + ',' + cifre[4].key;

    for (var i = 0; i < 10; i++) {
        console.log(cifre[i].key + "-> " + cifre[i].value);
    }

    // var final = [];
    //
    // for (var i in cifre){
    //     final.push(cifre[i]);
    // }
    // for(var i = 0; i<10; i++)
    //     for(j = i + 1; j<10; j++) {
    //         if(final[i].value  > final[j].value) {
    //             var aux = final[i];
    //             final[i] = final[j];
    //             final[j] = aux;
    //         }
    //     }
    //
    // var string_final = "";
    // for (var i = 9; i > 4; i--) {
    //     for (var j = 0; j < cifre.length; j++) {
    //         if (final[i].value == cifre[j].value) {
    //             string_final += cifre[j].key + ',';
    //             cifre.splice(cifre[j], 1);
    //         }
    //         break;
    //     }
    // }

    return string_final;
}

function medieSalariu() {
        var avg = 0;
        for (var i in employeesList) {
            avg += employeesList[i].salary;
        }

        return avg/(employeesList.length);
}

function sortBy() {
    var num = document.getElementById("sortare").value;

    employeesList.sort(function (a, b) {
        return parseFloat(a.salary) - parseFloat(b.salary);
    });
}