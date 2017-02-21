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

display_total(2, document.querySelector(".output"));