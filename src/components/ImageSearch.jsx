import React, { useState } from 'react'

export const ImageSearch = ({searchText}) => {
  const [text, setText] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }
  return (
    <div className="flex items-center justify-center py-2">
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={onsubmit} className="flex items-center border rounded-lg">
          <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Search..." className="w-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 rounded-lg" />
          <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
