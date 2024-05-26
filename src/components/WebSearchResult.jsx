import Link from 'next/link'
import React from 'react'

import Parser from 'html-react-parser'
import Paginartion from './Paginartion'
const WebSearchResult = ({results}) => {
  return (
    <div className=' w-full sm:pb-24 mx-auto px-3 pb-24 sm:pl-[5%]
    mb-pl-[14%] lg:pl-52'>
      <p className=' text-gray-600 text-sm mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults}results(
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {
        results.items?.map((result)=>(
            <div className='mb-8 max-w-xl' key={result.link}>
                <div className=' group flex flex-col'>
                   <Link href={result.link}>
                    {result.formattedUrl}
                   </Link>
                   <Link href={result.link} className=' group-hover:underline
                    decoration-blue-600 text-xl truncate font-medium
                     text-blue-800'>
                    {result.title}
                   </Link>
                </div>
                <p className=' text-gray-600'>{Parser(result.htmlSnippet)}</p>
            </div>
        ))
      }
      <Paginartion />
    </div>
  )
}

export default WebSearchResult
