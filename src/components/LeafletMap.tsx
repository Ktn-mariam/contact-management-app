import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { CountryType } from '../types/dataTypes'
import { useState } from 'react'

interface LeafletMapPropType {
  data: CountryType[]
}

const LeafletMap: React.FC<LeafletMapPropType> = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryType[]>(data)

  return (
    <div className="mx-10 my-10 d:mx-20 lg:mx-60">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const countryId = Number(event.target.value)
          if (countryId === 0) setSelectedCountry(data)
          else {
            setSelectedCountry(
              data.filter((country) => {
                return country.countryInfo._id === countryId
              }),
            )
          }
        }}
      >
        <option value={0}>All countries</option>
        {data.map((country) => {
          return (
            <option value={country.countryInfo._id}>{country.country}</option>
          )
        })}
      </select>
      <MapContainer
        center={{ lat: 20, lng: 77 }}
        zoom={5}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '60vh', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectedCountry.map((country: CountryType) => {
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
