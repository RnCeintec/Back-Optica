import internal from 'stream';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  Timestamp
} from 'typeorm';
import { Monturas } from './monturas';
import { Proveedor } from './proveedor';

@Entity({ name: 'ingreso_monturas' })
export class IngresoMonturas {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: true })
  isActive!: boolean;

  @Column({nullable:true})
  fecha!: Date

  @Column({nullable:true})
  hora!: string

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.ingreso)
  proveedor!: Proveedor;

  @Column()
  documento!: string

  @Column({nullable:true})
  numero_documento!: string


  @Column()
  @CreateDateColumn()
  fecha_creacion!: Date;

  @Column()
  @UpdateDateColumn()
  fecha_actualizacion!: Date;

  @OneToMany(() => Monturas, (monturas) => monturas.ingreso)
  monturas!: Monturas;



}