import Posts from './Posts';
import PostsWithThunk from './PostsWithThunk';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Displaying the posts from API
      </header>
      <Posts />
      <hr />
      <header className="App-header">
        Displaying the posts from API using createAsyncThunk
      </header>
      <PostsWithThunk />
    </div>
  );
}

export default App;
