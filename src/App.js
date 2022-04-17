import logo from './logo.svg';
import Movie from './components/Movie';
import {decorate, observable, action, computed} from 'mobx';
import './App.css';

decorate(Movie, {
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
