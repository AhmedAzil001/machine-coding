import { useState } from 'react'
import Accordian from './component/Accoridan'

function App() {

  const data=[
    {
      id:1,
      title:"Title 1",
      description:"This is a sample description for accordian 1",
    },
    {
      id:2,
      title:"Title 2",
      description:"This is a sample description for accordian 2",
    },
    {
      id:3,
      title:"Title 3",
      description:"This is a sample description for accordian 3",
    }
  ]

  return (
    <>
      <div className='flex justify-center items-center pt-24 flex-col gap-2 '>
        {
          data.map(item => <Accordian key={item.id} title={item.title} description={item.description}/>)
        }
      </div>
    </>
  )
}

export default App
