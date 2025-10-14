import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useState,useEffect } from 'react'
import { data } from 'react-router-dom'


function LocationMarker({Input}){
    const[Position,setPosition]=useState([35.7219, 51.3347])
    useEffect(()=>{
    const fetchData=async ()=>{
        try{
            const res= await fetch(`https://geocode.maps.co/search?q=${Input}&api_key=68ecca4c5cc3e657295131veubfbe8e`)
            const data=await res.json()
            console.log(data)
            const la=data.lat
            const lo=data.lon
            // const Loc=[la,lo]
            // console.log(Loc)
            
            // setPosition(data)
        }catch(error){
           console.log("Error")
        }
     }
     fetchData()
},[Input])
    // const position = [51.505, -0.09]
    
    return(
        <>
        <MapContainer center={Position} zoom={13} scrollWheelZoom={true}
                        doubleClickZoom={true}
                        zoomControl={true}
                        dragging={true}
                        style={{width:'100%',height:'100%'}}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={Position} 
                eventHandlers={{
                    click: () => {
                       console.log('marker clicked')
                    },
            }}>
                <Popup>
                   jgjggkgkgk
                </Popup>
            </Marker>
        </MapContainer>
        </>
    )
}

export default LocationMarker