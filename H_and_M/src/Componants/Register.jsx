import React from 'react'

const Register = () => {

    let Data = [];

    function saveData(key, arr){
      localStorage.setItem(key, JSON.stringify(arr));
    }
  
    function Loaddata(){
      let savedData = JSON.parse(localStorage.getItem("Data"));
      if(savedData){
        Data = savedData;
      }
    }
  
    const[formData, setFormData] = useState({});
  
    function Handlesubmit(e){
      e.preventDefault();
      let firstName = e.target[0].value;
      let lastName = e.target[1].value;
      let Email = e.target[2].value;
      let Password= e.target[3].value;
      let Confirm_Password= e.target[4].value;
  
      if((firstName.length == 0) && (Password.length == 0)){
        alert("Please enter correct crediantials");
  
      }else if(Password == Confirm_Password){
        let UserData = {
          FirstName: firstName,
          LasteName: lastName,
          email: Email,
          password:Password
        };
  
        Data.push(UserData);
        saveData("Data", Data);
        alert("Registration Successful");
        window.location.href = './Login'
  
      }
      else{
        alert("Please Check Crediantials");
      }
  
      console.log(UserData);
    }
  return (
    <div>Register</div>
  )
}

export default Register