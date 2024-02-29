import './app.scss';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
};

export default App;
