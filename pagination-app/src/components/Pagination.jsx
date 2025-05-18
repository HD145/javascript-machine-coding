import React, { useEffect, useState } from 'react'

const Pagination = ({ setVisProds, page, setPage, len }) => {

  const [pageNo, setPageNo] = useState();

  const [activePage, setActivePage] = useState(1);

  const handleNextPage = () => {
    const start = page?.start + 12;
    const end = Math.min(page?.end + 12, len);

    if (start >= len) {
      setPage({
        start: 0, end: Math.min(len, 12)
      })
    } else {
      setPage({
        start, end
      })
    }
  }

  const handlePrevPage = () => {
    const rem = page?.end % 12;
    const start = page?.start - 12;
    const end = page?.end - (rem === 0 ? 12 : rem)

    if (end === 0) {
      setPage({
        start: len - (len % 12),
        end: len
      })
    } else {
      setPage({
        start, end
      })
    }
  }
  
  const handlePageClick = (index) => {

    console.log(index);

    setActivePage(index);
    
    const start = (index - 1)*12;
    const end = Math.min(index * 12 , len);

    setPage({
      start, end
    })
  }

  useEffect(() => {
    let pages = len / 12;
    if (len % 12 !== 0) pages += 1;
    setPageNo(pages);
  }, [len])

  return (
    <div className='pagination'>

      <button onClick={() => handlePrevPage()} disabled={page?.start === 0}>Prev</button>

      <div className='pageBtn'>
        {
          Array.from({ length: pageNo }, (_, index) => {
            return (
              <div>
                <button style={{color : activePage === index+1 && "red"}} className='btn' onClick={()=>handlePageClick(index+1)}>{index + 1}</button>
              </div>
            )
          })
        }
      </div>
      <button onClick={() => handleNextPage()} disabled={page?.end === len}>Next</button>
    </div>

  )
}

export default Pagination