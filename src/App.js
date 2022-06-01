import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Resume from './components/Resume';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Resume />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
