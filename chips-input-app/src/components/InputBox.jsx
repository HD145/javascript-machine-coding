import React, { useEffect, useState } from 'react'
import ChipList from './ChipList';

const InputBox = () => {

    const [chipsList, setChipsList] = useState([]);

    const [chip, setChip] = useState();

    const handleAddChips = (e) => {
        if (e.target.value.trim() === "") return;
        if (e.key === "Enter") {
            setChipsList(prev =>{
                return [...prev, e.target.value]
            })
            setChip("")
        }
    }
    const handleDeleteChips = (i) => {
        const newArray = [];
        chipsList.map((item, id) => {
            if (id !== i) newArray.push(item);
        })
        setChipsList(newArray)
    }

    return (
        <div>
            <h2>Enter the Text</h2>
            <div>
                <input value={chip} onChange={(e) => setChip(e.target.value)} placeholder='Enter the text' onKeyDown={(e) => handleAddChips(e)}></input>
            </div>
            <ChipList list={chipsList} handleDeleteChips={handleDeleteChips} />
        </div>
    )
}

export default InputBox