import React,{ useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const Map = () => {

    useEffect(() => { 
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/alexm09/cl0loekqv005314qy7u0xkcg4',
          center: [ 55.2708, 25.2048],
          zoom:13,
        })
    }, [])
    
  return (
    <div className={style.wrapper} id='map'/>
  )
}

export default Map