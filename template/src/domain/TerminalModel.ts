import { TerminalModel as Terminal, UseModel } from '../application'
export default class TerminalModel extends Terminal {
  static add (entities: UseModel<Terminal>[]) {
    return this.bulkCreate(entities)
  }
}