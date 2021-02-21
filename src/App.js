import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import Cards from './components/Cards'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Filters />
      <article className="corpo">
        <h3>SHAMPOOS E DERMOCOSMÉTICOS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis gravida nibh id pharetra. Pellentesque convallis tellus in libero sodales dapibus sit amet at mauris. Nam ullamcorper velit in est fringilla.</p>
        <Cards />
        <Button />
      </article>
    </div>
  );
}

export default App;
