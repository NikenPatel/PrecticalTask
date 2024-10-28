import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = (e) => {
    e.preventDefault();
    const isSuccess = login(username, password);
    if (isSuccess) {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <>
      <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div class="md:w-1/2 px-5">
            <h2 class="text-2xl font-bold text-purple-700">Login</h2>
            <p class="text-sm mt-4 text-purple-700">
              If you have an account, please login
            </p>
            <form class="mt-6" action="#" method="POST" onSubmit={handleLogin}>
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter UserName"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                />
              </div>

              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-purple-500 focus:bg-white focus:outline-none"
                  autofocus
                  autocomplete
                />
              </div>

              <div class="text-right mt-2">
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-700 transition-all hover:text-purple-700 focus:text-purple-700"
                >
                  Forgot Password?
                </a>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}

              <button
                type="submit"
                class="w-full block bg-purple-500 transition-all hover:bg-purple-400 focus:bg-purple-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              >
                Log In
              </button>
            </form>

            <div class="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr class="border-gray-500" />
              <p class="text-center text-sm">OR</p>
              <hr class="border-gray-500" />
            </div>

            <div class="text-sm flex justify-between items-center mt-3">
              <p>If you don't have an account...</p>
              <button class="py-2 px-5 ml-3 bg-white border rounded-xl transition-all hover:scale-110 duration-300 border-purple-400  ">
                Register
              </button>
            </div>
          </div>

          <div class="w-1/2 md:block hidden ">
            <img
              src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
              class="rounded-2xl"
              alt="page img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
