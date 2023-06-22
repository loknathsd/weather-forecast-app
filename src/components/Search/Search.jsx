import React from 'react';

const Search = ({ handleChange, search, value }) => {
    return (
        <div className='mt-10'>
            <input
                onChange={handleChange}
                onKeyPress={search}
                className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Country"
                value={value}
            />
        </div>
    )
}
export default Search;