import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class BaseModel extends BaseEntity {
  // 主键
  @PrimaryGeneratedColumn()
  id: number;
  
  // 创建时间
  @Column()
  createTime: Date;

  // 更新时间
  @Column()
  updateTime: Date;
  
  // 状态
  @Column()
  status: number;
}