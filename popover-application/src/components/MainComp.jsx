import  { useState } from 'react'
import Modal from './Modal'
import TestComp1 from './TestComp1'

const MainComp = () => {

  const [flag, setFlag] = useState(false)

  return (
    <div>
      <button onClick={() => setFlag(prev => !prev)}>Open Modal</button>
      {
        flag && <Modal title="Test Component 1" component={<TestComp1 />} onClose={() => setFlag(false)} />
      }
    </div>
  )
}

export default MainComp