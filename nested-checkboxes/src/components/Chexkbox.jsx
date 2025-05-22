import React, { useState } from 'react'
import BoxComp from './BoxComp';

const nestedCheckboxData = [
    {
        id: 'frontend',
        label: 'Frontend',
        checked: false,
        children: [
            {
                id: 'react',
                label: 'React',
                checked: false,
                children: [
                    {
                        id: 'hooks',
                        label: 'React Hooks',
                        checked: false,
                        children: [
                            {
                                id: 'custome',
                                label: 'Custom React Hook',
                                checked: false,
                                children: []
                            }
                        ],
                    },
                    {
                        id: 'router',
                        label: 'React Router',
                        checked: false,
                        children: [],
                    },
                ],
            },
            {
                id: 'vue',
                label: 'Vue',
                checked: false,
                children: [],
            },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        checked: false,
        children: [
            {
                id: 'node',
                label: 'Node.js',
                checked: false,
                // children: [],
                children: [
                    {
                        id: 'security',
                        label: 'Spring Security',
                        checked: false,
                        children: [],
                    },
                    {
                        id: 'jpa',
                        label: 'JPA',
                        checked: false,
                        children: [],
                    },
                ],
            },
            {
                id: 'spring',
                label: 'Spring Boot',
                checked: false,
                children:[]
                
            },
        ],
    },
    {
        id: 'devops',
        label: 'DevOps',
        checked: false,
        children: [
            {
                id: 'docker',
                label: 'Docker',
                checked: false,
                children: [],
            },
            {
                id: 'kubernetes',
                label: 'Kubernetes',
                checked: false,
                children: [],
            },
        ],
    },
];
const Chexkbox = () => {

    const [state, setState] = useState({});
    
    const handleClick = (val, node) =>{
        
        setState((prev)=>{
            const newVal = {...prev , [node?.id]:val};
            const handleFunc = (obj) =>{
                obj?.children?.map(item => {
                    newVal[item?.id] = val;
                    item?.children?.length && handleFunc(item)
                })
            }
            handleFunc(node);

            const verifyCheck = (obj) => {                
                if(obj?.children?.length === 0){
                    return newVal[obj?.id] || false;
                }
                const check = obj.children.every(item => verifyCheck(item))
                newVal[obj?.id] = check;
                return check;
            }
            
            nestedCheckboxData?.map(item => verifyCheck(item))
            return newVal;
        })
        
        
    }
    return (
        <BoxComp obj = {nestedCheckboxData} handleClick = {handleClick} state={state} />
    )
}

export default Chexkbox