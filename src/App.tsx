import { toast, ToastContainer } from 'react-toastify'
import "./styles/global.css"
import "react-toastify/dist/ReactToastify.css";

function App() {

	const handleClick = () => {
		toast("Успех!", {
			position: "top-right"
		})
	}
  return (
    <>
    	<ToastContainer/>
     <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
