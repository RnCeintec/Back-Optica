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
  import { DetalleMovimientoP, User } from '.'; 

  
  @Entity({ name: 'movimientop' })
  export class MovimientoP {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @CreateDateColumn()
    fecha!: Date;

    @Column()
    tiendaId!: number
    
    @ManyToOne(((type)=>Shop))
    @JoinColumn()
    tienda!:Shop;

    @Column({nullable:true})
    userId!: number;

    @ManyToOne(((type)=>User))
    @JoinColumn()
    user!:User;


    @Column()
    estado!: string;

    

    @OneToMany(() => DetalleMovimientoP, (mov) => mov.movimiento)
    detallesmovimientop!: DetalleMovimientoP[];
  
  
  }
  
  
  