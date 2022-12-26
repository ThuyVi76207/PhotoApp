import React from 'react';
import { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';
import NotFound from 'components/NotFound';



const Photo = React.lazy(() => import('./features/Photo/index.jsx'));

function App() {
  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter> {/* Todo: Remote after testing */}
          <Header />
          <Routes> {/*Replace Switch*/}

            <Route path='/' element={<Navigate to='/photos' />}></Route>{/*Replace Redirect*/}
            <Route path='/photos/*' element={<Photo />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
