import './style/App.css'
import { Link } from 'react-router-dom';
import { useTranslation  } from 'react-i18next'

import { Card, Space } from 'antd';

function App() {
  const {t, i18n} = useTranslation(['translation'])

  const clickChangeLng = (event: any) =>{   // assign any type
    const lang = event.target.value;
    i18n.changeLanguage(lang);    // change lang
  }
  
  return (

    <Space align='center' direction="vertical" size="middle" className='main-container'>

      <select className='lng' onChange={clickChangeLng}>
        <option value='en'>{t('eng')}</option>
        <option value='th'>{t('thai')}</option>
      </select>
      
      <Space direction="horizontal" size="middle" wrap className='card-width'>
        <Link to='/test'>
          <Card title={t('test_title1')} size="small" >
            <p>{t('test_des1')}</p>
          </Card>
        </Link>
        <Link to='/test'>
          <Card title={t('test_title2')} size="small">
            <p>{t('test_des2')}</p>
          </Card>
        </Link>
        <Link to='/test'>
          <Card title={t('test_title3')} size="small">
            <p>{t('test_des3')}</p>
          </Card>
        </Link>
      </Space>


    </Space>
    
  )
}

export default App

