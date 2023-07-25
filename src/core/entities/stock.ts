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
  import { Shop } from './shop';
  import { Accesorio } from './accesorio'
import { access } from 'fs';

  
  @Entity({ name: 'stock' })
  export class Stock {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Accesorio, (accesorio: Accesorio) => accesorio.stocks)
    @JoinColumn()
    accesorio!: Accesorio;
    @Column()
    accesorioId!: number;  

    @ManyToOne(() => Shop, (tienda: Shop) => tienda.stocks)
    @JoinColumn()
    tienda!: Shop;  
    
    @Column()
    tiendaId!: number;


    @Column()
    cant_tienda!: number;

    @Column({nullable: true})
    smt!: number;


    @Column()
    @CreateDateColumn()
    fecha_creacion!: Date;
  
    @Column()
    @UpdateDateColumn()
    fecha_actualizacion!: Date;

 
   
  
  
  }
  
  
  