
import './App.css';

import Routing from './Routing/Routing';

import UserRouting from './Routing/UserRouting';

import AdminRouting from './Routing/AdminRouting';

import HrRouting from './Routing/HrRouting';
import Signup from './LoginAndSignupPages/Sign';
import Sign from './LoginAndSignupPages/Sign';
import Status from './UserPages/Status';



function App() {
  return (
      
    <div className="App">
      
      <Routing />
      <UserRouting />
      <AdminRouting />
     
      <HrRouting />

      {/* <Status/> */}
  
    
    
  
    </div>
  );
}

export default App;
