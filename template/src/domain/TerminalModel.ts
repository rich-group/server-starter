import { TerminalModel as Terminal, UseModel } from '@/application/sequelize/models'
export class TerminalModel extends Terminal {
  static add (entities: UseModel<Terminal>[]) {
    return this.bulkCreate(entities)
  }
}