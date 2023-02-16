import { useState, useEffect } from 'react'
import Station from "./Station";



function App() {
  const [channel, setChannel] = useState([]);

useEffect(() => {
 fetch("https://api.sr.se/api/v2/channels?format=json&size=4")
 .then((response) => response.json())
 .then ((data) => {
    setChannel(data.channels);
    console.log(data);
 });
}, []);

return (
<div className="m-6">
  {channel.map((station) => {
    return <Station station={station} />
  })}
</div>

)



}

export default App
