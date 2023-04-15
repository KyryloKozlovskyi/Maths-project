import {
    calc,
    create_table
} from './utils.js';

var input_button = document.getElementById("input_button");

input_button.addEventListener("click", driver);

//runs js code
function driver() {
    sessionStorage.user_input = document.getElementById("input_box").value; //user input
    calc(sessionStorage.user_input); //runs calc function
    create_table(); //runs create table function
}