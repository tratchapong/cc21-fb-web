import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <>
    <AppRouter />
    <ToastContainer position='top-center'/>
    </>
  )
}

export default App
