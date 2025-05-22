import React, { useEffect } from 'react'

const BoxComp = ({ obj, level = 0, handleClick, state }) => {

    return (
        <div>
            {
                obj.map(item => (
                    <div key = {item?.id} style={{ display: "flex", flexDirection:'column',  alignItems:"center"}}>
                        <div style={{marginLeft:`${80*level}px`}}>
                            <span>{item?.label}</span>
                            <input checked={state[item?.id] || false} type='checkbox' style={{margin:"10px"}} onChange={(e)=>handleClick(e.target.checked, item)} />
                        </div>
                        {item.children?.length > 0 && <BoxComp obj={item?.children} level = {level + 1} handleClick={handleClick} state={state}/>}
                    </div>
                ))
            }
        </div>
    )
}

export default BoxComp