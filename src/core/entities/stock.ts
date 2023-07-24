import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
  } from 'typeorm';
  import { Shop } from './shop';
  import { Accesorio } from './accesorio'
import { access } from 'fs';

  
  @Entity({ name: 'stock' })
  export class Stock {
    @PrimaryGeneratedColumn()
    idproducto!: number;

    @PrimaryGeneratedColumn()
    idTienda!: number;

    @Column()
    canttienda!: number;

    @Column()
    smt!: number;


    @Column()
    @CreateDateColumn()
    fecha_creacion!: Date;
  
    @Column()
    @UpdateDateColumn()
    fecha_actualizacion!: Date;



    @ManyToOne(() => Shop, (tienda) => tienda.stocks)
    tienda!: Shop;

   
    @ManyToOne(() => Accesorio, (accesorio) => accesorio.stocks)
    accesorio!: Accesorio;
  
  
  
  }
  
  
  