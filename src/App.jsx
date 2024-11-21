import { useState ,useEffect} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

   useEffect(()=>{
  setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark');
   })
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme == "dark" ? "bg-[#121212]" : null
        } h-[100vh]`}
      >
        <Header />
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
