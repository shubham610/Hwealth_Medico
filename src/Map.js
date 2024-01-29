import React, { useState } from 'react'

const Map1 = () => {
    const [map, setMap] = useState(new Map())
    map.size==0&&setMap(new Map([[{"hi":""},"hello"]]));
    
    // map.size==1&&setMap(new Map([["hi","Bye"]]));
  return (
    <div>{map.get({"hi":""})}</div>
  )
}

export default Map1