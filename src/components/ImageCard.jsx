import React from 'react'

export const ImageCard = ({ image }) => {
  const tags = image.tags.split(',')
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-3 mx-auto'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg md:col-span-3 col-span-1'>
        <img src={image.webformatURL} alt="" className='w-full md:h-[250px] h-[100px]' />
        <div className='px-4 py-4'>
          <div className='font-bold text-purple-500 text-xl mb-2'>
            Photo By {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Download: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className='px-6 py-4'>
          {tags.map((tag, index) => (
            <span key={index} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1'>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
