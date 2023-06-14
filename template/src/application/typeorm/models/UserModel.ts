import { Entity, Column } from "typeorm";
import { BaseModel } from "./BaseModel";

@Entity({
  name: 'user'
})
export class UserModel extends BaseModel {  
  @Column({name: ''})
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  gender: number;
}