import './App.css';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/>
          <Routes>
            <Route path='/' exact Component={NoteListPage}/>
            <Route path='/notes/:noteId' Component={NotePage}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
