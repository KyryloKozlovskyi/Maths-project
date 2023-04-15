var input, list, output, operators, numLines, binary, numVars, answer;
let count = 0;

function calc(user_input_calc_param) {

    input = user_input_calc_param; // Gets string from inBox
    list = (input.split(" ")); // Creates array from input
    //for (let i = 0; i <= list.length; i++) {
    //  operators = list[2*i+1];
    //}
    numVars = (list.length + 1) / 2;
    if ((list.length % 2) == 0) {
        output = "Invalid expression entered!";
    } // If an even number of variables are entered then the expression is invalid
    else {
        logic(); // Runs logic function
    }
}

function logic() {
    //count = 0;
    output = "";
    input = "";
    output = "";
    numLines = Number(2 ** (numVars)); // Number of lines in the truth table
    for (let i = 0; i < list.length; i += 2) {
        output += list[i];
    }

    for (let i = 0; i < numLines; i++) { // Loop increments binary digit through all possible combinations for all variables
        binary = String(i.toString(2)); // Parses i to binary string
        while (binary.length != numVars) {
            binary = "0" + binary;
        }

        for (let j = 0; j < list.length; j += 2) { // Loop gives individual binary digit to each variable
            list[j] = String(binary.charAt(j / 2));
        }

        for (let k = 0; k <= list.length - 1; k++) { // Builds concatinating string
            answer += list[k];

        }

        if (count == 0) {
            output += eval(answer.slice(9, answer.length));
        } else {
            output += eval(answer);
        }
        // Increments table
        count++;
        answer = "";

    }
    sessionStorage.result = output;
}

function create_table() {

    //resets the table
    let th = document.getElementById("table_head");
    //th.removeChild(th.firstChild);
    th.innerHTML = "";
    let tb = document.getElementById("table_body");
    //tb.removeChild(tb.firstChild);
    tb.innerHTML = "";

    //creates an element of the table and then appends it to the html
    let table_row = document.createElement("tr");
    table_row.innerHTML = "<th>" + sessionStorage.user_input + "</th>";
    document.getElementById("table_head").appendChild(table_row);

    for (let i = 0; i <= sessionStorage.result.length; i++) {
        if (sessionStorage.result[i] == "1" || sessionStorage.result[i] == "0") {
            let table_data = document.createElement("tr");
            table_data.innerHTML = "<td>" + sessionStorage.result[i] + "</td>";
            document.getElementById("table_body").appendChild(table_data);
        }
    }
}

export {
    calc,
    create_table
};