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
  import { Shop } from './shop';
  import { Detalleinventario } from './detalleinventario';
  
  @Entity({ name: 'historialmovimiento' })
  export class Historialmovimiento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    monturasId!: number
   
    @ManyToOne(((type)=>Monturas))
    @JoinColumn()
    monturas!:Monturas;

    @Column()
    @CreateDateColumn()
    fecha!: Date;

    @Column()
    indicador!: string;


     @Column()
     tiendaId!: number
    
     @ManyToOne(((type)=>Shop))
     @JoinColumn()
     tienda!:Shop;
   
     @Column({nullable:true})
     comentario!: string;

  
  }
  
  
  