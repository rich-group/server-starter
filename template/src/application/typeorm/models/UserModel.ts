import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseModel } from "./BaseModel";

@Entity({
  name: 'user'
})
export class UserModel extends BaseModel {  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: number;
}