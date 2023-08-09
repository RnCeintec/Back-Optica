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

  import { Accesorio } from './accesorio';
  import { Shop } from './shop';
  import { Movimiento } from './movimiento';
  import { User } from '.'; 

  @Entity({ name: 'detallemovimientop' })
  export class DetalleMovimientoP {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    movimientoId!: number;

    @ManyToOne(((type)=>Movimiento))
    @JoinColumn()
    movimiento!:Movimiento;


    @Column()
    accesorioId!: number
   
    @ManyToOne(((type)=> Accesorio))
    @JoinColumn()
    accesorio!: Accesorio;

    @Column()
    tiendaId!: number
    
    @ManyToOne(((type)=>Shop))
    @JoinColumn()
    tienda!:Shop;

    @Column()
    cantidad!: number

    @Column({default: true })
    isActive!: boolean;


  
  }
  
  
  