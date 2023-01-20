import Antd from './Antd'
import './App.css'
import Test from './Test'
import Test_sw from './Test_sw'

function App() {

  // ##########################################################
  // const shapeSection1 = shape.slice(0,3).map((item,index)=>{
  //   <div className='block' key={index}>
  //     <div style={{'clipPath': item.style}}></div>
  //   </div>
  // });
  // const shapeSection2 = shape.slice(3).map((item,index)=>{
  //   <div className='block' key={index}>
  //     <div style={{'clipPath': item.style}}></div>
  //   </div>
  // });
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return (
    <div className="App">
      {/* <Antd /> */}
      <Test />

      {/* <hr/> */}

      {/* <Test_sw /> */}

    </div>
  )
}

export default App
