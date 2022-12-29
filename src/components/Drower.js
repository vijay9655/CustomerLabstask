import React,{useState} from 'react'
import { Button, Drawer, Space,Input,Select } from 'antd';
import 'antd/dist/reset.css';
import axios from 'axios'
// import "antd/dist/antd.css";
import { useForm } from 'react-hook-form';
import "../App.css"
import Icon from '@mui/material/Icon';

import {
  LeftOutlined ,MinusSquareTwoTone
} from '@ant-design/icons';
import Navbar from './Navbar';
function Drower() {

  const [open, setOpen] = useState(false);
  const [val1, setVal1] = useState(false);
  const [val2, setVal2] = useState(false);

  const [size, setSize] = useState();
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [data,setData]=useState({
    segment_name: "last_10_days_blog_visits",
    schema: [
    {first_name: "First name"},
    {last_name :"Last name"}
    ]
    })
    const [datas,setDatas]=useState({})
    console.log('datas',datas);
      // const {
      // const {
      // const {
    //   handleSubmit,
    //   control,
    //   formState: { errors },
    // } = useForm();
  const showDefaultDrawer = () => {
   
    setSize('default');
    setOpen(true);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const handleChange = (key,value) => {
    setVal2(false)
  
    var v={
      labels:key  
    }
    
    setDatas((e)=>{
    return  {...e,'schema':[...e.schema,value]}
    })
  

    console.log(data);
  };
  const handleChange1 = (value) => {
    setVal1(false)

   
  };
  const onchange =(e)=>{
   
    setDatas({'segment_name':e.target.value,'schema':[]})
  }

  const submitdata=()=>{
    alert(`${datas.segment_name},${Object.values(datas.schema)}`)
    if(datas?.segment_name !=""){
      if(datas?.schema !=''){
      axios.post('https://webhook.site/ce99e955-8b48-4280-bf7f-bb3af2bfe38b',datas)
      .then((res)=>{
      
        console.log("response user get method login data",res.data)
    
      //   alert('Logindata')
      }).catch((err)=>{
          console.log(err)
      });
      
    }
    else{
      setVal2(true)

      }
    
  }
  else{
    setVal1(true)
  }
   

  }
  return (
    
    <div>
      <Navbar/>
    <div>
      <Space direction="vertical" style={{margin:'5% 0% 0% 50%',alignItems:'center',justifyContent:'center'}}>
        <Button type="default" onClick={showDefaultDrawer}>
         Save segment
        </Button>
        
      </Space>
      <Drawer style={{fontSize:'15px',fontFamily:'sans-serif'}} title="Saving Segment" width={520} closable={true} closeIcon={<LeftOutlined />} onClose={onClose} open={open}>

          <label>Enter the Name of the Segment</label> <br/><br/>
        
          <Input  onChange={onchange} placeholder='Name of the Segment' style={{
          width: '80%',
          border:val1==true?'red':'none'
        }}
/><br/><br/>
          <p style={{lineHeight:'28px'}}>To Save your segment,you need to add the schemas <br/>to build the query</p>
          <Space style={{float:'right'}} direction='horizontal'>
          <Icon color='primary' style={{background:'green',borderRadius:'70%'}} baseClassName="fas" className="fa-plus-circle" fontSize="small" />
           <p style={{paddingTop:'20%'}}>-User Traits</p>
            <Icon color='primary' style={{background:'red',borderRadius:'70%'}} baseClassName="fas" className="fa-plus-circle" fontSize="small" />
            <p style={{paddingTop:'15%'}}>-Group Traits</p>
          </Space>
       <div>
        {datas.schema?.map((e)=>{
          console.log('vall',e);
          return <div style={{width:'100%'}}>
            <span>
              <Select
          defaultValue={e.label}
          
          style={{
            width: '70%',
          }}
          onChange={()=>{handleChange1(e.value)}}
          options={[
            {
              value:e.value,
              label:e.label,
            }           
          ]}
        />
        <span><MinusSquareTwoTone color='primary' style={{width:'40px'}}/></span>
        <br/><br/></span></div>
      
        })}
        

          <Select
      defaultValue="Add schema to segment"
      style={{
        width: '70%',
        border:val2!=true?'red':'none'
      }}
      onChange={handleChange}
      options={[
        {
          value: 'first_name',
          label: 'Firstname',
        },
        {
          value: 'last_name',
          label: 'Lastname',
        },
        {
          value: 'genter',
          label: 'Genter',
        },
        {
          value: 'age',
          label: 'Age',
        },
        {
          value: 'account_name',
          label: 'Account Name',
        },
        {
          value: 'city',
          label: 'City',
        },
        {
          value: 'state',
          label: 'State',
        },
      ]}
    />
    <span> <MinusSquareTwoTone color='primary' style={{width:'30px'}}/></span>
    </div><br/>
    <p style={{color:'#4bffbc',width:'30%'}}>&#x2B; Add New Schema<br/><hr style={{background:'#4bffbc',height:'2px',border: 'none'}}/></p>
<Space>
    <Button onClick={submitdata} style={{background:'#4bffbc',marginTop:'40%'}}>Save the Segment</Button> 
    <Button onClick={onClose} style={{color:'red',marginTop:'80%'}}>Cancel</Button>  

    </Space>        
      </Drawer>
      </div>
    </div>
  )
}

export default Drower