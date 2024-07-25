import {Outlet} from 'react-router-dom'
import Navigation from './components/Navigation.jsx';
function App(){
  return (
    <>
     <div className='Nav'>
        <Navigation className='Nav'/>
      </div>
    <Outlet/>

    </>
  )
}

// const App = () => {
//   return (
//     <>
//       <div className='Nav'>
//         <Navigation className='Nav'/>
//         </div>

//       <div className='content'>
//         <div className='Head'>
//           <Header/>
//         </div>

//         <div className='body'>
//           <AboutMe/>
//           <Project/>
//         </div>
//         <div className='foot'>
//           <Footer/>
//       </div>
//     </div>
//     </>
//   )
// }

export default App