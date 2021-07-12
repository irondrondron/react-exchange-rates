import React, { useEffect, useState } from 'react';
import './App.sass';
import DataTable from './components/DataTable';
import Loader from './components/Loader';
import { getData } from './components/utils';

function App() {
  const [data, setData] = useState(null);
  const [loaderVisible, setLoaderVisible] = useState(true);

  async function asyncGetData() {
    await getData.then((receivedDataJson) => setData(receivedDataJson));
    await setLoaderVisible(false);
  }

  useEffect(() => {
    asyncGetData();
  }, [loaderVisible]);

  return (
    <div className="App">
      {loaderVisible ? <Loader /> : <DataTable data={{ ...data }} />}
    </div>
  );
}

export default App;
