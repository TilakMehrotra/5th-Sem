function sum()
    {
        let num=parseInt(document.getElementById("t1").value);
        let sum=0;
        while(num>0)
        {
            let p=num%10;
            sum=sum+p;
            num=Math.floor(num/10); 
        }
        document.getElementById("sp").innerHTML="Sum of digit "+sum;
    }

    function reverse()
    {
        let num=parseInt(document.getElementById("t1").value);
        let rev=0;
        while(num>0)
        {
            let p=num%10;
            rev=rev*10+p;
            num=Math.floor(num/10);
        }
        document.getElementById("sp").innerHTML="Reverse "+rev;
    }
    
    function dtobin()
    {
        let num=parseInt(document.getElementById("t1").value);
        let bin="";
        while(num>0)
        {
            let p=num%2;
            bin=p+bin;
            num=Math.floor(num/2);
        }
        document.getElementById("sp").innerHTML="Binary "+bin;
    }