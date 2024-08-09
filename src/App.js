

import Navbar from './components/Navbar ';
import AddImage from './components/AddImage';
// import ImageSlider from './components/ImageSlider';
// import MultiImageSlider from './components/MultiImageSlider';
// import ImageRow from './components/ImageRow';
import ImageSlider from './components/ImageSlider';
import ImageShop from './components/ImageShop';


function App() {
  
  return (
   <>
   <Navbar/>
   <AddImage/>
   {/* <ImageSlider  images={images} imagesToShow={3}/> */}
   {/* <MultiImageSlider  images={images} imagesToShow={3}/> */}
   {/* <ImageRow/> */}
   <ImageSlider/>
   <ImageShop/>
   </>
  );
}

export default App;
