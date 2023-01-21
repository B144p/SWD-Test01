import React, { useState } from 'react'
import { Divider, Space } from 'antd'
import { useTranslation  } from 'react-i18next'

import './style/TestComp.css'

const shapeCommand:string[] = [
  'polygon(25% 50%, 65% 90%, 65% 10%)',
  'polygon(0% 100%, 50% 0%, 100% 100%)',
  'polygon(0% 0%, 50% 100%, 100% 0%)',
  'polygon(35% 10%, 35% 90%, 75% 50%)'
]
const shape:string[] = [
  'polygon(30% 10%, 30% 90%, 70% 90%, 70% 10%)',
  'circle(25%)',
  'ellipse(45% 35% at 50% 50%)',
  'polygon(25% 10%, 5% 90%, 95% 90%, 75% 10%)',
  'polygon(5% 10%, 20% 90%, 95% 90%, 80% 10%)',
  'polygon(5% 10%, 5% 90%, 95% 90%, 95% 10%)'
]

const TestComp: React.FC = () => {
  const {t, i18n} = useTranslation(['translation'])
  const clickChangeLng = (event: any) =>{   // assign any type
    const lang = event.target.value;
    i18n.changeLanguage(lang);    // change lang
  }
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
  const randomArray = () =>{
    const temp = [...shape]
    temp.sort(() => Math.random() - 0.5);
    setCurrentColor(temp[0]);
    shape.splice(0, shape.length, ...temp);
  }


  const shapeSection1 = shape.slice(0,3).map((shape, index)=>{
    return(
      <div className='block'>
        <div key={index} style={{ clipPath: shape }} onClick={randomArray} ></div>
      </div>
    )
  });
  const shapeSection2 = shape.slice(3).map((shape, index)=>{
    return(
      <div className='block'>
        <div key={index} style={{ clipPath: shape }} onClick={randomArray} ></div>
      </div>
    )
  });

  

  return (
    <Space align='center' direction="vertical" size="small" className='main-container'>
      <select className='lng' onChange={clickChangeLng}>
        <option value='en'>{t('eng')}</option>
        <option value='th'>{t('thai')}</option>
      </select>
      <h1 className='title'>
        {t('test_des1')}
      </h1>
      
      <Space direction="vertical" size="small">
        <Space size="middle">
          <div className='block-command' onClick={handleLeft} >
            <div style={{ clipPath: shapeCommand[0] }}></div>
            <span className='move-text'>{t('move')}</span>
          </div>

          <div className='long-block' onClick={switchRow} >
            <div className='shape-long1' style={{ clipPath: shapeCommand[1] }}></div>
            <div className='shape-long2' style={{ clipPath: shapeCommand[2] }}></div>
            <span className='sw-text'>{t('switch')}</span>
          </div>

          <div className='block-command' onClick={handleRight} >
            <div style={{ clipPath: shapeCommand[3] }}></div>
            <span className='move-text'>{t('move')}</span>
          </div>
        </Space>
        <Divider />
      </Space>

      <Space direction="vertical" size="middle">
        <Space size="middle" className='row row-top'>
          {shapeSection1}
        </Space>
        <Space size="middle" className='row row-top'>
          {shapeSection2}
        </Space>
      </Space>

    </Space>
  )
  
}

export default TestComp