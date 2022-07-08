import React from 'react'
import "./chartbox.css"
const data =[
  {
  type:"send",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
  name:"Mrianl Fouzdar",
  message:"Hi I'm Mrinal"
},
  {
  type:"recived",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",

  name:"User",
  message:"Hi I'm User"
},
  {
  type:"send",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
  name:"Mrianl Fouzdar",
  message:"how are you?"
},
  {
  type:"recived",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
  name:"Mrianl Fouzdar",
  message:"....?"
},
  {
  type:"send",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU",
  name:"Mrianl Fouzdar",
  message:"how are you?"
},
]
function ChartBox() {
  return (
    <div className='chart-main-div'>
        {
          data.map((item,i)=> <div key={i}>
            {
              item.type ==="send" ? <Mymasseage item={item}/> : <Usermass item={item}/>
            }
          </div>)
        }

        <div>
          <input type="text" name="" className='iptbox'/>

        </div>
    </div>
  )
}

function Mymasseage({item}){
  return (
    <div className='flex-div'>
      <div className='imgdiv'>
      <img src={item.img} alt="" />
      </div>
      <div>
        <h1>{item.message}</h1>
      </div>
    </div>
  )

}
function Usermass({item}){

  return (
    <div className='flex-div'>
      <div>
        <h1>{item.message}</h1>
      </div>
      <div className='imgdiv'>
      <img src={item.img} alt="" />
      </div>
    </div>
  )

}



export default ChartBox