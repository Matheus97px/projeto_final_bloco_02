import { IsBoolean, IsDate, IsNotEmpty, Min } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";


@Entity({ name: "tb_produtos" })
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Min(0)
    @Column("decimal", { precision: 10, scale: 2, nullable: false })
    preco: number;

    @IsNotEmpty()
    @Min(0)
    @Column({ nullable: false })
    quantidade: number;

    @IsNotEmpty()
    @IsBoolean()
    @Column({ type: "boolean", nullable: false })
    generico: boolean;

    @IsNotEmpty()
    @UpdateDateColumn()
    dataFabricacao: Date;

    @UpdateDateColumn()
    dataValidade: Date;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "categoria_id" })
    categoria: Categoria;


}
