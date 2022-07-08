import React from 'react'
import "./dashboard.css"
import AddIcon from '@mui/icons-material/Add';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function Dashboard() {
  return (
    <div className='desh-main-div'>
        <div className="left-side">
            <div className="logo">
                <AirplanemodeActiveOutlinedIcon sx={{border:"1px solid", width:"3vw",hight:"3vh",padding:"20px", fontSize:"5vh"}}/>
            </div>
            <div className='discrip'>
                <h1>Analytics Deshboard</h1>
                <p>Dashboard is an online report wheere your website data from ecommerce to web analytics is displayed.</p>

            </div>

        </div>

        <div className="right-side">
            <div className='str-div'>
                <button className='str-btn'>
                <StarBorderIcon /> 
                </button>
            </div>
            <button className='createBtn'> <AddIcon/> Create New</button>
        </div>
    </div>
  )
}

export default Dashboard