document.getElementById("show-2").onclick = function () {
    document.getElementById("org").innerHTML = "<h4>Examples</h4><ul><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></ul> "
}
document.getElementById("show-1").onclick = function () {
    document.getElementById("org").innerHTML = "<ul><li>A variable name cannot contain any spaces.</li><li>A variable name can contain only letters,numbers'collar sign and underscores.</li><li>Though a variable name can't be any of javascriptkeywords, it can contain keywords.For examples <code> userAlert </code> and <code>myVar</code> are legal.</li><li>Capital letters are fine,but be careful.Variabl names are case sensitive.</li></ul> "
}

document.getElementById("sum").onclick = function () {
    document.getElementById("org").innerHTML = "<center> first number=20 <br> second number=10 <br>Sum= 20+10</center>"
    document.getElementById("result").innerHTML = "30"
}
document.getElementById("sub").onclick = function () {
    document.getElementById("org").innerHTML = "<center>first number=20 <br> second number=10 <br>Subtract= 20-10 </center>"
    document.getElementById("result").innerHTML = "10"
}
document.getElementById("mul").onclick = function () {
    document.getElementById("org").innerHTML = "<center>first number=20 <br> second number=10 <br>Multiply= 20*10</center>"
    document.getElementById("result").innerHTML = "200"
}
document.getElementById("div").onclick = function () {
    document.getElementById("org").innerHTML = "<center>first number=20 <br> second number=10 <br>Divide= 20/10</center>"
    document.getElementById("result").innerHTML = "2"
}
document.getElementById("cal").onclick = function () {
    document.getElementById("org").innerHTML = "<center>45/5*2+4**2-( 6+3 )</center>"
    document.getElementById("result").innerHTML = "25"
}
document.getElementById("btn-clr").onclick = function () {
    document.getElementById("org").innerHTML = null
}
document.getElementById("btn-out").onclick = function () {
    document.getElementById("result").innerHTML = null
}