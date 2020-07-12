function getPrevious(){
    return document.getElementById("previous-value").innerText;
}
function printPrevious(num){
    document.getElementById("previous-value").innerText=num;
}
function getCurrent(){
    return document.getElementById("current-value").innerText;
}
function printCurrent(num){
    if(num == ""){
        document.getElementById("current-value").innerText=num;
    }
    else{
        document.getElementById("current-value").innerText=formattedFunction(num);
    }
}

function formattedFunction(num){
    num = Number(num);
    var value = num.toLocaleString("en");
    return value;
}
function reverseFormatt(num){
    return Number(num.replace(/,/g,""));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
    {
    operator[i].addEventListener("click",function(){
        if(this.id=="clear")
        {
            printPrevious("");
            printCurrent("");
        }
        else if(this.id=="delete")
        {
            var output = reverseFormatt(getCurrent()).toString();
            if(output)
            {
                output = output.substr(0,output.length-1);
                printCurrent(output);
            }            
        }
        else
        {
            var output = getCurrent();
            var previous = getPrevious();
            if(output!="")
            {
                output=reverseFormatt(output);
                previous=previous+output;
                if(this.id=="=")
                {
                    var result = eval(previous);
                    printCurrent(result);
                    printPrevious("");
                }
                else
                {
                    previous = previous + this.id;
                    printPrevious(previous);
                    printCurrent("");
                }
            }
        }
    })
}
var number = document.getElementsByClassName('number');
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){
        var output = reverseFormatt(getCurrent());
        if(output!=NaN){
            output=output+this.id;
            printCurrent(output);
        }
    })
}