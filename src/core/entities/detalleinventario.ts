import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    JoinColumn
  } from 'typeorm';
  import { Monturas } from '.';
  import { Historialinventario } from './historialinventario';

  
  @Entity({ name: 'detalleinventario' })
  export class Detalleinventario {
    @PrimaryGeneratedColumn()
    iddetalle!: number;

    @ManyToOne(() => Historialinventario, (historialinv)=> historialinv.detalleinv)
    historialinventario!: Historialinventario;
  
  

    @Column({ nullable: true })
    monturasId!: number
   
    @ManyToOne(((type)=>Monturas))
    @JoinColumn()
     monturas!:Monturas;
  
  
  
  
  
  
  }
  