import React from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs';


const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category)



  return (
    <>
      <h1 className="gif-category">{category.toUpperCase()}</h1>
      {loading && <h1 className="loading animate__animated animate__zoomOutDown">Loading...</h1>}
      <div className="gif-grid">

        {

          data.map(img => {
            return <GifGridItem key={img.id} {...img} />

          })

        }

      </div>
    </>
  );
}

export default GifGrid;
