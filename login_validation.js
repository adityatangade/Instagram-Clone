function validateLogin(){
    
    var username=document.getElementById("form_username").value;
    var password=document.getElementById("form_password").value;

    if(username == "")
    {
        alert("Please enter a valid username .");
        return false;
    }
    else if(password == "")
    {
        alert("Please enter a valid password .");
        return false;
    }
    else if(username == "Arijit Singh_official")
    {
        if(password != "arijit@100")
        {
            alert("Incorrect Password.");
            return false;
        }
    }
    else if(username != "Arijit Singh_official")
    {
        alert("Username does'nt exist.");
        return false;
    }
    else
    {
        return true;
    }
}