import logo from './logo.svg';
import './App.css';
import EnhancedComponent from './Component1';
import ButtonComponent from './ButtonComponent';
import SliderComponent from './SliderComponent';

function App(props) {
  // Call the props from originalComponent
  // Destructuring the props
  
  // Calling out the props
 return (
   <div>
     <ButtonComponent/>
     <SliderComponent/>
   </div>
 )
}

export default EnhancedComponent(App);
