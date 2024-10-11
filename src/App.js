import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';




function App() {
  return (
    <div className="app">
     
     <Header/>


     {/* App body */}
     <div className='app_body'>
      <Sidebar/>
      
      <Feed/>
     {/* Widget */}

     </div>
     
    </div>
  );
}

export default App;
