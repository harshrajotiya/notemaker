

document.getElementById("addbtn").addEventListener("click",function(){
    let notee=document.getElementById("typenote").value;
    // console.log(notee);

    document.getElementById("typenote").value="";
    
    document.getElementsByClassName("allnotes")[0].innerHTML+= " <div class='inNote' >"+ notee +" </div> ";
})
