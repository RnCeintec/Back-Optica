import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne
  } from 'typeorm';

  
  @Entity({ name: 'movimiento' })
  export class Movimiento {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @CreateDateColumn()
    fecha!: Date;

    @Column()
    responsable!: string;

    @Column()
    recepcion!: string;

    @Column()
    estado!: string;

    @Column({ nullable: true })
    ruc!: string;

    @Column({ nullable: true })
    razonsocial!: string;

    @Column({ nullable: true })
    nrodocumento!: string;

    @Column({ nullable: true })
    fechafacturacion!: string;

    @Column({ default: 0 })
    idusuarioenvio!: number;


  
  }
  
  
  