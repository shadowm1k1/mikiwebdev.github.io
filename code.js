function Button_Click()
{ 
  var Username = document.getElementById('Username').value;
  var Password = document.getElementById('Password').value;

  if(Username == "Ece" && Password == "isTheBest")
  {
    open('surprise.html');
  }
  
  
}