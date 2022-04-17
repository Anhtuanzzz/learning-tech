import logo from './logo.svg';
import Waifu from './components/Waifu';
import {decorate, observable, action, computed} from 'mobx';
import './App.css';

decorate(Waifu, {
  reviewList: observable,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
});

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
