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
  import { DetalleMovimiento, User } from '.'; 

  
  @Entity({ name: 'movimiento' })
  export class Movimiento {
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

    @Column({ nullable: true })
    ruc!: string;

    @Column({ nullable: true })
    razonsocial!: string;

    @Column({ nullable: true }) 
    documento!: string;

    @Column({ nullable: true })
    nrodocumento!: string;

    @Column({ nullable: true })
    fechafacturacion!: string;

    @Column({ default: 0 })
    idusuarioenvio!: number;

    @OneToMany(() => DetalleMovimiento, (mov) => mov.movimiento)
    detallesmovimiento!: DetalleMovimiento[];
  
  
  }
  
  
  