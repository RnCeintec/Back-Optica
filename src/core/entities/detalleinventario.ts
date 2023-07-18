import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
  } from 'typeorm';
  import { Monturas } from '.';
  import { Historialinventario } from './historialinventario';

  
  @Entity({ name: 'detalleinventario' })
  export class Detalleinventario {
    @PrimaryGeneratedColumn()
    iddetalle!: number;

    @ManyToOne(() => Historialinventario, (historialinv)=> historialinv.detalleinv)
    historialinventario!: Historialinventario;
  
  
   
    @ManyToOne(() => Monturas, (monturas )=> monturas.detalleinv)
     monturas!:Monturas ;
  
  
  
  
  
  
  }
  