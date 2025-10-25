import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { useState } from 'react'

function HomeLocation(){
    const[Position,setPosition]=useState([ 35.761041, 51.39422])
    return(
          <MapContainer id='map' center={Position} zoom={13} scrollWheelZoom={true}
                        doubleClickZoom={true}
                        zoomControl={true}
                        dragging={true}
                        style={{width:'600px',height:'600px'}}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={Position} >
                <Popup>
                  
                </Popup>
            </Marker>
            
        </MapContainer>
    )
}

export default HomeLocation