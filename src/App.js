import { useEffect, useState } from 'react';

function App() {

  const [info, setInfo] = useState(null)

  useEffect(() => {

    const getData = async () => {
      // const response = await fetch('http://localhost:8000')
      const response = await fetch('https://dummydeploy-api.onrender.com')

      const data = await response.json();
      console.log(data.dataSend)
      setInfo(data.dataSend)

    }

    if (true) getData();

  }, [])

  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>

      <div>
        {
          info && info.map((inf) => <>
            <h1>{inf.id}</h1>
            <h1>{inf.name}</h1>
          </>)
        }

      </div>

    </div>
  );
}

export default App;
