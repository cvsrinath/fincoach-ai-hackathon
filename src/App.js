import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h3>Fraud detection bot</h3>

      <input style = {{width: '100vh', height: '7vh', borderRadius: '5vh', borderColor: 'black'}} type="search" class="form-control form-control-dark text-bg-dark" placeholder="What do you need help with?" aria-label="Search">
      </input>
      <svg style = {{marginTop: '5vh'}} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
      
    </div>
  );
}

export default App;
