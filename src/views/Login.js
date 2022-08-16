import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/login", {
        email: email,
      });
      console.log(data);
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" onClick={login} value="Submit" />
      </form>
    </div>
  );
};

export default Login;
