import './App.css';
import { useEffect, useState } from 'react';
import DropdownMenuClass from './DropDownMenuClass';
import Parent from './ParentToChild';
import Parent1 from './childToParent';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  
  function loadData(param1) {
    console.log(param1);
    setInterval(() => {
      setData(new Date());
    }, 2000);
  }

  useEffect(loadData, []);

  return (
    <>
      {/* {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <DropdownMenuClass/> */}
      <Parent1/>
    </>
  );
}

export default App;
