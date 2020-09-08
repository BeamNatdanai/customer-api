
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn() 
  customer_id: number;

  @Column({ length: 150 })
  first_name: string;

  @Column({ length: 150 }) 
  last_name: string;

  @Column({ length: 10 }) 
  tel_no: string;

}