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
