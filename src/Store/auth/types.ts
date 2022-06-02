export interface user {
  id: number
  username: string
  email: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
  provider: string
  firstName: string
  lastName: string
}

export interface initialStateType {
  authenticated: boolean
  user: null | user,
  loading: boolean
}

export interface loginSuccessResponse {
  jwt: string
  user: user
}

export interface crudentials {
  identifier: string
  password: string
}