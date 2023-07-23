import { useEffect, useState } from 'react'
import './App.css'
import { ImageCard } from './components/ImageCard';
import { ImageSearch } from './components/ImageSearch';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');


  useEffect(() => {
    
    const apiKey = '38417843-e15d923107bc207799c0cfb44';

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto py-52'>Image Not Found</h1> }

      {isLoading ? <h1 className='text-6xl text-center mx-auto py-52'>Loading...</h1> : <div className='grid grid-cols-3 gap-4'>
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  )
}

export default App
