import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [recipe, setRecipe] = useState();

    const [searchData, setSearchData] = useState()

    const [cachedData, setCachedData] = useState({});

    const handleSearch = async () => {        
        if(cachedData[recipe]?.length > 0){
            setSearchData(cachedData[recipe]);
            return;
        }

        await fetch(`https://dummyjson.com/recipes/search?q=${recipe}`).then(async (response) => {
            const res = await response.json();
            setSearchData(res?.recipes ?? []);
            if(recipe.length>0)setCachedData(prev => ({...cachedData, [recipe]:res?.recipes}));
        })
    }
    
    useEffect(() => {
    
        const timeOut = setTimeout(() => {
            handleSearch();
        }, 300)
        return () => clearTimeout(timeOut);
    }, [recipe])

    return (
        <div className='comp'>
            <div className='searchBar'>
                <h2>Search Your Dish</h2>
                <input onFocus={()=>handleSearch()} onBlur={()=>setSearchData([])} placeholder='Search' value={recipe} onChange={(e) => setRecipe(e.target.value)}></input>
            </div>
            {
                searchData?.length > 0 && <div className='searchResult'>
                    {
                        searchData?.map(item => (
                            <div key={item?.name} className='searchItem'>{item?.name}</div>
                        ))
                    }
                </div>
            }

        </div>
    )
}

export default SearchBar