import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ColumnTypeUndefinedError,
} from "typeorm";
import { Diotrias } from "./dioptrias";
import { Monturas } from "./monturas";
import { Historialinventario } from "./historialinventario";
import { Sales } from "./sales";
import { Stock } from "./stock";
import { Historialmovimiento } from "./historialmovimiento";

@Entity({ name: "local" })
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: true })
  isActive!: boolean;

  @Column()
  nombre!: string;

  @Column()
  direccion!: string;

  @Column()
  telefono!: string;

  @Column()
  correo!: string;

  @Column()
  num_documento!: string;

  @Column()
  eslogan!: string;

  @Column()
  ciudad!: string;

  @OneToMany(() => Sales, (ventas) => ventas.shop)
  ventas!: Sales[];

  @Column()
  @CreateDateColumn()
  fecha_creacion!: Date;

  @Column()
  @UpdateDateColumn()
  fecha_actualizacion!: Date;

  @Column()
  rz_social!: string;

  @Column()
  codDomicilioFiscal!: string;

  @OneToMany(() => Monturas, (monturas) => monturas.tienda)
  monturas!: Monturas[];

  @OneToMany(() => Historialinventario, (historialinventario) => historialinventario.tienda)
  historialinventarios!: Historialinventario;


  @OneToMany(() => Diotrias, (diotrias) => diotrias.tienda)
  diotrias!: Diotrias;

  @OneToMany(() => Stock, (stock) => stock.tienda)
  stocks!: Stock;

  @OneToMany(() => Historialmovimiento, (mov) => mov.tienda)
  historialmov!: Historialmovimiento;



}
