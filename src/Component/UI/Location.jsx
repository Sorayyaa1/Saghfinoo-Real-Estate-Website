// import { render } from 'react-dom'
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"


const position = [51.505, -0.09]


function LocationMarker(){

    return(
        <>
        <MapContainer center={[51.505,-0.09]} zoom={13} scrollWheelZoom={true}
                        doubleClickZoom={true}
                        zoomControl={true}
                        className='h-screen w-full'>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505,-0.09]} 
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