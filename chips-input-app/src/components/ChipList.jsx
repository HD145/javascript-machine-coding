import React from 'react'

const ChipList = ({list, handleDeleteChips}) => {
    console.log(list);
    
  return (
    <div className='chips'>
        {list?.map((item, index)=>(
            <div className='chipItem'>
                {item}
                <button onClick={()=>handleDeleteChips(index)}>X</button>
            </div>
        ))}
    </div>
  )
}

export default ChipList