import { toast, ToastContainer } from 'react-toastify'
import "./styles/global.css"
import "react-toastify/dist/ReactToastify.css";
import { Login } from './login/Login';

function App() {

	const handleClick = () => toast("Успех!", {
			position: "top-right",
			autoClose: 5000
		})
  return (
    <>
    	<ToastContainer/>
     	<Login />
    </>
  )
}

export default App
