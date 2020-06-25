import React, { useState } from 'react';

const COD_API_SERVER = 'http://localhost:3030/'

function App() {
  const [mwData, setMwData] = useState({});

  const getData = async () => {
    await fetch(`${COD_API_SERVER}?platform=battle&userId=spidey#11175`)
      .then( resp => resp.json())
      .then( (result) => {
        setMwData(result)
      },
      (error) => console.log(error))
  }

  var allBrData = JSON.stringify(mwData.br_all);
  console.log(mwData); // debug to see the state of mwData
  return (
    <div>
      <button onClick={() => getData()}>CLICK FOR DEMO!</button>
      <div>{allBrData}</div>
    </div>
  );
}

export default App;
