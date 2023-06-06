import Header from './components/header';
import Information from './components/personal-information';
import Hiring from './components/hiring';
import Skills from './components/skills';
import Footer from './components/footer';
import './App.css'

function App() {
  
  return (
    <div className='w-[100vw] h-[100vh] bg-[#F5ebee] overflow-hidden'>
    <Header/>  
    <Information/>
    <Hiring/>
    <Skills/>
    <Footer/>
    </div>
  )
}

export default App
