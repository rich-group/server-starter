export { 
  BaseController,
  AddressModel,
  ErrorModel,
  PerformanceModel,
  ScreenModel,
  SiteModel,
  SceneModel,
  TerminalModel,
} from './sequelize'


export type UseModel<T> = Omit<Pick<T, { 
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]>, "version" | "_attributes" | "_creationAttributes" | "isNewRecord" | "sequelize" | "_model">