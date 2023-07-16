import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";


  @Entity({ name: "color" })
  export class Color {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ default: true })
    isActive!: boolean;
  
    @Column()
    codigo!: string;
  
    @Column()
    color!: string;

  }
  