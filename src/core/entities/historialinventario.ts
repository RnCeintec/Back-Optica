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
  import { Shop } from './shop';
  import { Detalleinventario } from './detalleinventario';
  
  @Entity({ name: 'historialinventario' })
  export class Historialinventario {
    @PrimaryGeneratedColumn()
    idhistorial!: number;

    @Column()
    @CreateDateColumn()
    fecha!: Date;

    @Column()
    total!: number;

    @Column()
    totalfaltantes!: number;

    @Column()
    totalverificados!: number;

    @ManyToOne(() => Shop, (tienda) => tienda.historialinventarios)
    tienda!: Shop;
  
  
    @OneToMany(() => Detalleinventario, (detalleinv) => detalleinv.historialinventario)
    detalleinv!:Detalleinventario;
  
  
  
  }
  
  
  