import React, {useState} from "react";


function Login(props) {
  const [fieldsError, showFieldsError] = useState(false);
  const { login, password, changeLogin, changePassword } = props;
  return (
    <form onSubmit={(e) => {
      showPasswordsError(false)
      showFieldsError(false);

      if (login === "" || password === "") {
        showFieldsError(true);
        
      }  else if (password!==repeatPassword){
        showPasswordsError(true)
      }  else {
      submitForm(login, password);
      showPasswordsError(false)
      showFieldsError(false);
    }
    }}>
      <div>
        <input
          type="text"
          value={login}
          placeholder="login"
          onChange={(e) => {
            changeLogin(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            changePassword(e.target.value);
          }}
        />
      </div>
      <input type="submit" disabled={!login||!password} value='submit'/>
    </form>
  );
}


export default Login;