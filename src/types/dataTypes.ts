export interface Contact {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNo: string
  status: 'active' | 'inactive'
}

export interface ContactsState {
  contacts: Contact[]
  status: string
  error: any
}

export interface CountryType {
  updated: number
  country: string
  countryInfo: CountryInfoType
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  continent: string
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
}

export interface CountryInfoType {
  _id: number
  iso2: string
  iso3: string
  lat: number
  long: number
  flag: string
}
