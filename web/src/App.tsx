import './styles/global.css';

import Habit from "./components/Habit"
function App() {
 

  return (
    <>
     <h1>Hello World</h1>
     <Habit completed={3} />
     <Habit completed={5} />
     <Habit completed={10} />
    </>
   
  )
}

export default App
