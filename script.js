function check(event)
{
    event.preventDefault();
    let a1=document.getElementById("a1").value;
    let a2=document.getElementById("a2").value;
    let a3=document.getElementById("a3").value;
    let a4=document.getElementById("a4").value;
    let a5=document.getElementById("a5").value;
    let a6=document.getElementById("a6");
    let a7=document.getElementsByName("gender");

    let r1=r2=r3=r4=r5=r6=r7=true;
    if(a1=="")
    {
        document.getElementById("r1").innerHTML="*Please enter your name*";
    }
    else
    {
        r1=false;
    }
    if(a2=="")
    {
        document.getElementById("r2").innerHTML="*Please enter your email*";
    }
    else if((a2.indexOf("@gmail.com") || a2.indexOf("@nec.edu.in"))==-1)
    {
        document.getElementById("r2").innerHTML="*Please enter a valid emailaddress*";
    }
    else
    {
        r2=false;
    }
    if(a3=="sample")
    {
        document.getElementById("r3").innerHTML="*Please select your department*";
    }
    else
    {
        r3=false;
    }
    if(a4=="")
    {
        document.getElementById("r4").innerHTML="*Please enter your dob*";
    }
    else
    {
        r4=false;
    }
    if(a5=="")
    {
        document.getElementById("r5").innerHTML="*Please enter your password*";
    }
    else if(a5.length<3)
    {
        document.getElementById("r5").innerHTML="*Password length more than 2*";
    }
    else
    {
        r5=false;
    }
    if(a6.checked)
    {
        r6=false;
    }
    else
    {
        document.getElementById("r6").innerHTML="*Plese click*"
    }
    let u="";
    for(let i=0;i<a7.length;i++)
    {
        if(a7[i].checked)
        {
            u=a7[i].value;
        }
    }
    if(u=="")
    {
        document.getElementById("r7").innerHTML="*Please select your gender*";
    }
    else
    {
        r7=false;
    }
    if((r1 || r2 || r3 || r4 || r5 || r6 || r7)==true)
    {
        
    }
    else
    {
        alert("success");
    }
}