// import SignIn from "./component/signIn/SignIn"
// import Registration from "./component/registration/Registration";
import { RouterProvider } from 'react-router-dom'
import router from '../src/component/Router'
import './App.css'

function App() {
  return (
    <div className="App" style={{height:"100%"}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
