import React, { useState } from 'react';
import Menu from './Menu';
import ComponentLoader from './componentLoader';
import './index.css';


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Dynamic App</h1>
      </header>
      <Menu onSelect={setSelectedComponent} />
      <ComponentLoader componentName={selectedComponent} />
    </div>
  );
};

export default App;



