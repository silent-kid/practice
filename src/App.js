import './App.css';
import Navbar from './components/Navbar';

function App() {
  const videoRating =10;
  return (
    <>
    <div className="App">
      <Navbar videoRating={videoRating}/>
    </div>
    </>
  );
}

export default App;
