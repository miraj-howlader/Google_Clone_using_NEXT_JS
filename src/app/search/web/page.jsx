import WebSearchResult from "@/components/WebSearchResult";
import Link from "next/link";
import React from "react";


export default async function WebSearchPage({ searchParams }) {
  const startIndex =searchParams.start || "1";
  await new Promise((resolve)=>setTimeout(resolve,1000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`
  );

  if (!response.ok) throw new Error("Something went wrong!");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className=" flex flex-col justify-center items-center pt-10">
        <h1 className=" text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className=" text-lg">
          Try searching the web or images for something else {' '}
          <Link className=" text-blue-500" href='/'>Home</Link>
          </p>
      </div>
    );
  }
  return (
    <div>
      {results && <WebSearchResult results={data} /> }
       
       </div>
  );
}
