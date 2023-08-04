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

  import { Monturas } from './monturas';
  import { Shop } from './shop';
  import { Movimiento } from './movimiento';
  import { User } from '.'; 

  @Entity({ name: 'detallemovimiento' })
  export class DetalleMovimiento {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    movimientoId!: number;

    @ManyToOne(((type)=>Movimiento))
    @JoinColumn()
    movimiento!:Movimiento;


    @Column()
    monturasId!: number
   
    @ManyToOne(((type)=>Monturas))
    @JoinColumn()
    monturas!:Monturas;

    @Column()
    tiendaId!: number
    
    @ManyToOne(((type)=>Shop))
    @JoinColumn()
    tienda!:Shop;


    @Column({nullable:true})
    userId!: number;


  
  }
  
  
  