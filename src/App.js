import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar.component';
import Books from 'route/Books.route';
import Categories from 'route/Categories.route';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Books />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
