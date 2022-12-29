import React from 'react'
import { Button, Drawer, Space,Input } from 'antd';
import {
    LeftOutlined 
  } from '@ant-design/icons';
import 'antd/dist/reset.css';
import "../App.css"
function Navbar() {
  return (
    <div style={{height:'57px',backgroundColor: '#2f9ecb',fontSize:'18px',color:'white'}}>
        
         <LeftOutlined style={{padding:'1.5%',fontWeight:900,}} /><span>View Audience</span>           
          

    </div>
  )
}

export default Navbar