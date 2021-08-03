import React from 'react';

const Searchbox = ({searchChange}) => {
    return (
        <div className='center'>
            <input 
                type= 'search' 
                placeholder='search monsters'
                className='center search'
                onChange={searchChange}
             />
        </div>
    )
} 

export default Searchbox;