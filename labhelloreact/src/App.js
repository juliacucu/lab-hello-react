// src/App.js
import './App.css';
import Navbar from "./components/Navbar";
import Badge from './components/Badge';
import FeatureItem from './components/FeatureItem';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Badge />
      <section id='react-details'>
        <FeatureItem imgUrl='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png' title='Declarative' description='React make it painless to create interactive UIs.'/>
        <FeatureItem imgUrl='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png' title='Components' description='Build encapsulated components that manage their state.'/>
        <FeatureItem imgUrl='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png' title='Single-Way' description='A set of immutable values are passed to the components'/>
        <FeatureItem imgUrl='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png' title='JSX' description='Statically-typed, designed to run on modern browsers.'/>
      </section>

      
    </div>
  );
}
export default App;
