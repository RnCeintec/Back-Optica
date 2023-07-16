import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { isDocumentPE, isPhoneNumber } from "../validators";

import { Sales } from "./sales";

enum CTipoDocument {
  dni = "dni",
  ruc = "ruc",
  ce = "carnet de extranjeria",
  pasaporte = "pasaporte",
}

@Entity({ name: "vendedor" })
export class Vendedor {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: true })
  isActive!: boolean;

  /* @OneToMany(() => Sales, (ventas) => ventas.clientes)
        ventas!: Sales[]; */

  @Column()
  nombres!: string;

  @Column()
  direccion!: string;

  @Column({nullable:true})
  curriculum!: string;

  @Column({nullable:true})
  foto!: string;

  @Column({nullable:true})
  recibo!: string;

  @Column({nullable:true})
  comentario!: string;

  @Column({nullable:true})
  contrato!: string;

  @Column({nullable:true})
  fecha_ingreso!: Date;

  @Column({nullable:true})
  fecha_salida!: Date;

  @Column()
  tipo_documento!: string;

  @Column()
  @isDocumentPE({ message: "Ingrese un documento de identidad válido" })
  documento!: CTipoDocument;

  @Column()
  @isPhoneNumber({ message: "Ingrese un número de telefono correcto" })
  telefono!: number;

  @Column({nullable:true})
  @isPhoneNumber({ message: "Ingrese un número de telefono correcto" })
  telefono_referencia!: number;

  @Column()
  @CreateDateColumn()
  fecha_creacion!: Date;

  @Column()
  @UpdateDateColumn()
  fecha_actualizacion!: Date;

  @OneToMany(() => Sales, (ventas) => ventas.clientes)
        ventas!: Sales[];
}
