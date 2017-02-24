$(document).ready(function(){
    var test_number_length = function(number)
    {
        if (number.length > 15)
        {
            output_div.text(number.substr(number.length-15, 15));
            if (number.length > 20)
            {
                number = "";
                output_div.text("Error");
            }
        }
    };
            
    function add(first_operand, second_operand)
    {
        return first_operand + second_operand;
    }
    function subtract(first_operand, second_operand)
    {
        return first_operand - second_operand;
    }
    function multiply(first_operand, second_operand)
    {
        return first_operand * second_operand;
    }
    function divide(first_operand, second_operand)
    {
        return first_operand / second_operand;
    }
    var number = "", old_number = "", operator = "";
    var output_div = $(".output");
    output_div.text("0");

    $(".number").click(function()
    {
        number += $(this).val();
        output_div.text(number);
        test_number_length(number);
    })

    $(".addition,.subtraction,.multiplication,.division").click(function()
    {
        operator = $(this).val();
        old_number = number;
        number = "";
        $(".output").text("0");
    });

    $(".clear,.all-clear").click(function()
    {
        number = "";
        output_div.text("0");
        $(".clearall").click(function()
        {
            old_number = "";
        })
    })

    $(".equals").click(function()
    {
        var answer = 0;
        number = Number(number);
        old_number = Number(old_number);
        if (operator === "+")
        {
            answer = add(old_number, number);
        }
        else if (operator === "-")
        {
            answer = subtract(old_number, number);
        }
        else if (operator === "*")
        {
            answer = multiply(old_number, number);
        }
        else if (operator === "/")
        {
            answer = divide(old_number, number);
        }
        answer = String(answer);
        output_div.text(answer);
        test_number_length(answer);
        number = "", old_number = "";
    })
});
