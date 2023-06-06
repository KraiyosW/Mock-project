import Header from './components/header';
import Information from './components/personal-information';
import Hiring from './components/hiring';
import './App.css'

function App() {
  
  return (
    <div className='w-[100vw] h-[100vh] bg-[#F5ebee]'>
    <Header/>  
    <Information/>
    <Hiring/>
    </div>
  )
}

export default App
