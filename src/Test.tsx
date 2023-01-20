import React, { useState } from 'react'
import { Button, Space } from 'antd'
import './Test_sw.css'

const shape = [
  'polygon(30% 10%, 30% 90%, 70% 90%, 70% 10% )',
  'circle(25%)',
  'ellipse(45% 35% at 50% 50%)',
  'polygon(25% 10%, 5% 90%, 95% 90%, 75% 10%)',
  'polygon(5% 10%, 20% 90%, 95% 90%, 80% 10%)',
  'polygon(5% 10%, 5% 90%, 95% 90%, 95% 10%)'
]

const Test = () => {
  const [currentColor, setCurrentColor] = useState(shape[0]);

  const handleLeft = () => {
    const temp = [...shape.slice(1),shape[0]]   // value [index 1-5] , then push value [index 0]
    setCurrentColor(temp[0]);
    shape.splice(0, shape.length, ...temp);   // at index 0, remove 6 elements, then add all of temp
  }
  const handleRight = () => {
    const temp = [shape[5],...shape.slice(0,5)]   // value [index 5] , then push value [index 0-4]
    setCurrentColor(temp[0]);
    shape.splice(0, shape.length, ...temp);
  }
  const switchRow = () =>{
    // const rowTop = [...shape.slice(0,3)]
    // const rowBottom = [...shape.slice(3)]
    const rowTop = shape.slice(0,3)
    const rowBottom = shape.slice(3)
    const temp = [...rowBottom,...rowTop]
    setCurrentColor(temp[0]);
    shape.splice(0, shape.length, ...temp);
  }


  const shapeSection1 = shape.slice(0,3).map((shape, index)=>{
    return(
      <div className='block'>
        <div key={index} style={{ clipPath: shape }}></div>
      </div>
    )
  });
  const shapeSection2 = shape.slice(3).map((shape, index)=>{
    return(
      <div className='block'>
        <div key={index} style={{ clipPath: shape }}></div>
      </div>
    )
  });

  return (
    <div>
      <Space>
        <Button type='primary' onClick={handleLeft}>Left</Button>
        <Button type='primary' onClick={switchRow}>Switch Row</Button>
        <Button type='primary' onClick={handleRight}>Right</Button>
      </Space>
      <hr/>

      <section className='row row-top'>
        {shapeSection1}
      </section>
      <section className='row row-top'>
        {shapeSection2}
      </section>

      

    </div>
  )
  
}

export default Test