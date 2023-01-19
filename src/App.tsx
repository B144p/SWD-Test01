import { useState } from 'react'
import Antd from './Antd'
import './App.css'
import Test from './Test'
import { Button, Space } from 'antd'


function App() {
  interface Shape{
    style: string;
  }
  let shapeCommand: Shape[] = [
    {style: 'polygon(25% 50%, 65% 90%, 65% 10% )'},
    {style: ''},
    {style: ''},
    {style: 'polygon(35% 10%, 35% 90%, 75% 50%)'}
  ]
  let shape: Shape[] = [
    {style: 'polygon(30% 10%, 30% 90%, 70% 90%, 70% 10% )'},
    {style: 'circle(25%)'},
    {style: 'ellipse(45% 35% at 50% 50%)'},
    {style: 'polygon(25% 10%, 5% 90%, 95% 90%, 75% 10%)'},
    {style: 'polygon(5% 10%, 20% 90%, 95% 90%, 80% 10%)'},
    {style: 'polygon(5% 10%, 5% 90%, 95% 90%, 95% 10%)'}
  ]

  const [shapeState,setShapeState] = useState(shape);
  
  const turnLeft = (arr: Shape[]) =>{
    let temp = arr.shift()
    arr.push(temp);
    return arr;
  }
  const turnRight = () =>{
    alert('turnRight')
  }
  const SwRow = () =>{
    alert('SwRow')
  }

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

  const shapeSection1 = shape.slice(0,3).map((item,index)=>{
    return(
      <div className='block' key={index}>
        <div style={{'clipPath': item.style}}></div>
      </div>
    )
  });
  const shapeSection2 = shape.slice(3,6).map((item,index)=>{
    return(
      <div className='block' key={index}>
        <div style={{'clipPath': item.style}}></div>
      </div>
    )
  });

  return (
    <div className="App">
      <Antd />
      <Test />

      <hr/>

      <Space wrap>
        {/* <Button type='primary' onClick={() => shape = turnLeft(shape)}>Left</Button> */}
        <Button type='primary' onClick={() => setShapeState(turnLeft(shapeState))}>Left</Button>
        <Button type='primary' onClick={() => console.log(shapeState)}>Switch Row</Button>
        <Button type='primary' onClick={() => turnRight()}>Right</Button>
      </Space>



      <section className='row row-top'>
        {shapeSection1}
      </section>
      <section className='row row-top'>
        {shapeSection2}
      </section>

    </div>
  )
}

export default App
