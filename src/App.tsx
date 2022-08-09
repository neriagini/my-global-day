import './App.css';
import TimeZoneComponent from "./components/TimeZoneComponent";


function App() {

  return (
    <div className={`flex space-x-20 p-10`}>
        <TimeZoneComponent/>
        <TimeZoneComponent/>
        <TimeZoneComponent/>
    </div>
  );
}

export default App;
