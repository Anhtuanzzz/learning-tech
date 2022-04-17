import Waifu from './components/Waifu';
import {decorate, observable, action, computed} from 'mobx';
import './App.css';

decorate(Waifu, {
  name: observable,
  age: computed,
  heigjt: computed
});

function App() {
  return (
    <div className="App">
      <form>
        <label>Waifu's name:</label>
        <input type = 'text'></input>
      </form>
    </div>
  );
}

export default App;
