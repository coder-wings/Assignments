
//w.a.p. to enter any 2 number and print table between both.

function printTable(){
    let template=`<h1>Printing table b/w two numbers....</h1>
                  Enter first number:<input type="number" id="num1"/><br><br>
                  Enter second number:<input type="number" id="num2"/><br>
                  <input type="submit" id="btn" value="GetTable"/>`;
    document.getElementById("container").innerHTML=template; 
    document.getElementById("btn").addEventListener("click",()=>{
        let num1=parseInt(document.getElementById("num1").value);
        let num2=parseInt(document.getElementById("num2").value);
        console.log(num1);
        console.log(num2);
    })

}
printTable();