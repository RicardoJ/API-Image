import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const queryAPI = async () => {
      if (search === '') return;
      const imagesPerPage = 30;
      const key = '15120475-3dada0630c2f1ebfd8c1c4a56';
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}`;
      const response = await fetch(url);
      const result = await response.json();
      setSearch(result)
    }
    queryAPI();
  }, [search])
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Form
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}

export default App;
