import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';
import { Sales } from '.';
import { IngresoMonturas } from './ingreso_monturas';
import { Shop } from './shop';
import { Detalleinventario } from './detalleinventario';
import { Historialmovimiento } from './historialmovimiento';
import { DetalleMovimiento } from './detallemovimiento';

@Entity({ name: 'monturas' })
export class Monturas {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: true })
  isActive!: boolean;

  @Column()
  idmontura!: string;

  @Column()
  marca!: string;

  @Column()
  modelo!: string;

  @Column({nullable:true})
  colorDescripcion!: string;

  @Column()
  tipo!: string;

  @Column({nullable:true})
  talla!: string;

  @Column({nullable:true})
  puente!: string;

  @Column()
  codImpreso!: string;

  @Column({nullable:true})
  procedencia!: string;

  @Column()
  color!: string;

  @Column({nullable:true})
  estuche!: string;

  @Column({nullable:true})
  comentario!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  costo!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  venta!: number;


  @ManyToOne(() => Sales, (ventas) => ventas.monturas)
  ventas!: Sales;

  // @ManyToOne(() => IngresoMonturas, (ingreso) => ingreso.monturas)
  // ingreso!: IngresoMonturas;

  @ManyToOne(() => IngresoMonturas, (ingreso) => ingreso.monturas)
  ingreso!: IngresoMonturas;

  @Column({nullable:true})
  enmovimiento!: string;

  @Column()
  tope!: string;

  @Column({ default: 1 })
  estado!: string;


  @ManyToOne(() => Shop, (tienda) => tienda.monturas)
  tienda!: Shop;


  @Column()
  @CreateDateColumn()
  fecha_creacion!: Date;

  @Column()
  @UpdateDateColumn()
  fecha_actualizacion!: Date;


 
  @OneToMany(() => Detalleinventario, (detalleinv) => detalleinv.monturas)
  detalleinv!:Detalleinventario;


 
  @OneToMany(() => Historialmovimiento, (mov) => mov.monturas)
  historialmov!:Historialmovimiento;


  
  @OneToMany(() => DetalleMovimiento, (mov) => mov.monturas)
  Detallelmov!:DetalleMovimiento;



}


