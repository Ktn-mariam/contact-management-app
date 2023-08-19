import { useQuery } from '@tanstack/react-query'
import { CountryType } from '../types/dataTypes'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LeafletMap() {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      fetch('https://disease.sh/v3/covid-19/countries').then((res) =>
        res.json(),
      ),
  })
  if (isLoading) return <div>Loading...</div>
  console.log(data)
  if (error) return <div>An error has occurred</div>

  return (
    <div>
      <MapContainer
        center={{ lat: 20, lng: 77 }}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: '80%', height: '50vh' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((country: CountryType) => {
          return (
            <Marker
              position={{
                lat: country.countryInfo.lat,
                lng: country.countryInfo.long,
              }}
            >
              <Popup>
                <div className="flex-col font-bold text-center">
                  <span className="font-bold text-center text-md uppercase">
                    {country.country}
                  </span>
                  <br />
                  <span className="text-red-500 font-semibold">
                    Active: {country.active}
                  </span>
                  <br />
                  <span className="text-green-500 font-semibold">
                    Recovered: {country.recovered}
                  </span>
                  <br />
                  <span className="font-semibold">
                    Deaths: {country.deaths} <br />
                  </span>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}

export default LeafletMap
