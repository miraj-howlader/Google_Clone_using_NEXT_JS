import Link from 'next/link'
import React from 'react'
import Paginartion from './Paginartion'

const ImageSearchResult = ({results}) => {
  return (
    <div className=' sm:pb-24 pb-40 mt-4'>
      <div className=' grid grid-cols-1 md:grid-cols-2
       lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
          {
            results.items.map((result)=>(
                <div className=' mb-8' key={result.link}>
                   <div className=' group'>
                    <Link href={result.image.contextLink}>
                        <img src={result.link} alt={result.title} 
                        className=' h-60 group-hover:shadow-xl
                         w-full object-contain transition-shadow duration-300'/>
                    </Link>
                    <Link href={result.image.contextLink}>
                        <h2 className=' text-xl group-hover:underline truncate'>{result.title}</h2>
                    </Link>
                    <Link href={result.image.contextLink}>
                    <p className=' text-gray-600 group-hover:underline truncate'>{result.displayLink}</p>
                    </Link>

                   </div>
                </div>
            ))
          }
      </div>
      <div className=' ml-16'>
        <Paginartion />
      </div>
    </div>
  )
}

export default ImageSearchResult
