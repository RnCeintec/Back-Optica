import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Stock } from './stock';

@Entity({ name: 'accesorio' })
export class Accesorio {
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({default:true})
    isActive!: boolean;

    @Column()
    codigo!: string;

    @Column()
    descripcion!: string;

    @Column({type:'decimal', precision: 10, scale: 2, default: 0} )
    precio_compra!: number;

    @Column({type:'decimal',precision: 10, scale: 2, default: 0 })
    precio_sugerido !: number;

    @Column({type:'decimal',precision: 10, scale: 2, default: 0 })
    precio_minimo !: number;

    @Column({default:0})
    stock!: number;


    @Column()
    @CreateDateColumn()
    fecha_creacion!: Date;

    @Column()
    @UpdateDateColumn()
    fecha_actualizacion!: Date;

    @Column()
    @CreateDateColumn()
    fecha_vencimiento!: Date;
    
      
   @OneToMany(() => Stock, (stock) => stock.tienda)
   stocks!: Stock;
}  