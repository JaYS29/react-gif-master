import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [categories, setCategories] = useState([])

  return (
    <div className="container">
      <div className="category-form">
        <h2>Gif Expert App</h2>
        <AddCategory setCategories={setCategories} />
      </div>

      {

        categories.map(category =>
          <GifGrid key={category} category={category} />
        )
      }

    </div>
  );
}

export default GifExpertApp;