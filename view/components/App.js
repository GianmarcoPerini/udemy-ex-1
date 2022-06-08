import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const App = props => {
  //   const [data, setData] = useState([]);
  useEffect(() => {
    //ACADEMY22/GIANMARCO/WALKTHROUGH/TRANSACTION/ACADEMY_OPERATIONS
    axios
      .post('/XMII/Runner', {
        TRANSACTION:
          'ACADEMY22%2FGIANMARCO%2FWALKTHROUGH%2FTRANSACTION%2FACADEMY_OPERATIONS&OutputParameter=*',
      })
      .then(data => JSON.parse(data.documentElement.textContent))
      .then(a => console.log(a));
    // .then(json => console.log(json));
    // .then(json => console.log(json));
  }, []);
  return <>My react App</>;
};

export default App;
