// import SignIn from "./component/signIn/SignIn"
// import Registration from "./component/registration/Registration";
import { RouterProvider } from 'react-router-dom'
import router from '../src/component/Router'


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
