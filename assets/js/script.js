document.querySelector(".button").addEventListener("click", function(event){
    var button_value = event.target.value;
    var is_operator = false;
    var first_operand = 0, second_operand = 0;
    
    if (button_value = "+" || "-" || "*" || "/"(
    {
        is_operator = true;
    }
}

function add(first_value, second_value)
{
    return first_value + second_value;
}

function subtract(first_value, second_value)
{
    return first_value - second_value;
}

function multiply(first_value, second_value)
{
    return first_value * second_value;
}

function divide(first_value, second_value)
{
    return first_value / second_value;
}

function display_total(total, intoElement)
{
    intoElement.innerText = total;
}

