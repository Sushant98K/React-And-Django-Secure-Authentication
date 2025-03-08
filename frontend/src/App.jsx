
import './App.css'
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom' 
import Login from './routes/Login'

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={ <Login /> }
        />
      </Routes>
    </Router>
  )
}

export default App
