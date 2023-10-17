import golf from './assets/golf.webp'
import bald from './assets/bald.jpg'

const App = () => {
  return (
    <div>
      <h1>El Rincon Del Golf</h1>
      <div><img src={golf} alt="Image 1" style={{ width: '50%' }} /></div>
      <img src={bald} alt="Image 2" style={{ width: '50%' }} />
    </div>
  );
}

export default App;
