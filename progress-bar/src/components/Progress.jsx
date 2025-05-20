import React from 'react'
import ProgressBars from './ProgressBars';

const Progress = () => {

    const progressChart = [0, 5, 10, 20,, 35, 55, 70, 85, 100];
  return (
    <div>
        {
            progressChart.map(item=>(
                <ProgressBars progress={item} />
            ))
        }
    </div>
  )
}

export default Progress