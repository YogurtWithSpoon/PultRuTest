import Container from './components/container/container'
import Header from './components/header/header'
import Main from './components/main/main'
import ProductGallery from './components/productgallery/productgallery'
import Footer from './components/footer/footer'
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main />
        <ProductGallery/>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
