import './App.css'
import Login from './components/Login'
import { UserProvider } from './context/UserContext'
// import Profile from './components/Profile'
// import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserProvider>
      <Login />
      {/* <Profile /> */}
    </UserProvider>
  )
}

export default App