import React, { useEffect, useState } from 'react'
import data from "../src/search.json"
import Fuse from 'fuse.js'
import Searchresult from './Searchresult';
const Seach = () => {
    const full= data.data;
 
	const [queryText, setQueryText] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = e => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) {
			setSearchResults([])
			return
		}
		const fuse = new Fuse(full,{
			keys:["name"],
      includeScore:true,
      threshold:0.3
		})
		const result= fuse.search(queryText,{limit:5});
		
		setSearchResults(result);
    console.log("Search result",result)
	}, [queryText])

  return (
    <div>
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative m-8 mt-24 md:m-24 md:mb-6 w-11/12">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="p-4 w-10/12 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500"
          placeholder="Search Mockups, Logos..."
          required
          onChange={handleChange}
        />
        
      </div>
    </form>
    <div className='container z-20 ml-10 md:ml-24 w-3/4 relative '>
    {queryText && (
					<Searchresult searchResults={searchResults} />
			)}
    </div>
  </div>
  )
}

export default Seach