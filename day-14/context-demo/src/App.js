import './App.css';
import { createContext, useContext, useState } from 'react';
import ContactUsForm from './FormComponent';
import ExampleForm from './Uncontrolled';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
function App() {
  const [themeName, setThemeName] = useState("light");
  const currentTheme = themes[themeName];
  return (
    <>
    <ExampleForm></ExampleForm>
    </>
  );
}
export default App;
