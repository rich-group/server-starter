export { AddressModel } from './AddressModel'
export { ErrorModel} from './ErrorModel'
export { PerformanceModel } from './PerformanceModel'
export { SceneModel } from './SceneModel'
export { ScreenModel } from './ScreenModel'
export { SiteModel } from './SiteModel'
export { TerminalModel } from './TerminalModel'
export { BaseModel } from './BaseModel'

export type UseModel<T> = Omit<Pick<T, { 
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]>, "version" | "_attributes" | "_creationAttributes" | "isNewRecord" | "sequelize" | "_model">