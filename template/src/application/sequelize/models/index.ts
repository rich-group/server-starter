export { UserModel } from './UserModel'
export { BaseModel } from './BaseModel'

export type UseModel<T> = Omit<Pick<T, { 
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]>, "version" | "_attributes" | "_creationAttributes" | "isNewRecord" | "sequelize" | "_model">