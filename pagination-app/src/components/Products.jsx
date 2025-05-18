import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

const Products = () => {

    const [products, setProducts] = useState([])

    const [visProds, setVisProds] = useState([]);

    const [page, setPage] = useState({
        start: 0, 
        end: 12
    })

    useEffect(() => {
        const products = Array.from({ length: 45 }, (_, i) => ({
            title: `Product ${i + 1}`,
            image: `https://picsum.photos/seed/product${i + 1}/300/200`
        }));
        setProducts(products);
        setPage({
            start:0,
            end:Math.min(products?.length, 12)
        })
    }, [])

    useEffect(()=>{
        const arr = [];
        for(let i = page?.start ; i<page?.end ; i++){
            arr.push(products[i]);
        }
        setVisProds(arr);
    },[page])    
    
    return (
        <div>
            <div className='heading'>
                <h2>Products Page</h2>
            </div>

            <Pagination setVisProds={setVisProds} page={page} setPage={setPage} len={products.length} />
            {
                <span>Showing {page?.start + 1} - {page?.end} of {products?.length}</span>
            }
            <div className='card-container'>
                {
                visProds.map(item=>(
                    <>
                        <div className = "card">
                            <img src={item?.image}/>
                            <span>{item?.title}</span>
                        </div>
                    </>
                ))
            }
            </div>
        </div>
    )
}

export default Products