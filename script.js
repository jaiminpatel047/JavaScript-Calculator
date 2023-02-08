
         function getData(e)
    {
           console.log(e.value)
           document.getElementById('result').value += e.value
    }

    function  result()
    {
           var strdata =  document.getElementById('result').value
           document.getElementById('result').value = eval(strdata)
    }

    function cleardata()
    {
        console.log("hello")
        var clear = document.getElementById("result").value = "";
    }

    function appear()
    {   
        document.getElementById('disappear').src = ''
    }

    function disappear()
    {
        document.getElementById('disappear').src = './img/pokimon.gif'
    }
