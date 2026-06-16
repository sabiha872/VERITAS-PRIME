import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: frontend test
    console.log("Login Data:", form);

    alert("Login Successful (Frontend Only)");
  };

  return (
    <div className="auth-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="auth-form">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;