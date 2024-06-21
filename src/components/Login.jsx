import { useState } from "react";
import { useAuth } from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const {login} = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(username, password)
        
    }


    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-2xl mb-4">Login</h2>
          <div className="mb-4">
            <label className="block mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
}

export default Login