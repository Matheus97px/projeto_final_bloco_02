import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produto } from "../entities/produto.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { CategoriaService } from "../../categoria/services/categoria.service";


@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService
    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true, usuario: true
            }
        });
    }

    async findById(id: number): Promise<Produto> {

        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true, usuario: true
            }
        });

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

        return produto;
    }

    async findAllByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true , usuario: true
            }
        })
    }

    async create(produto: Produto): Promise<Produto> {
        this.criarValidade(produto);

        await this.categoriaService.findById(produto.categoria.id);
        if (!produto.categoria.id) throw new HttpException('Categoria ID não encontrada', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.save(produto);
    }

    async update(produto: Produto): Promise<Produto> {

        await this.findById(produto.id);
        if (!produto.id) throw new HttpException('Produto ID não encontrada', HttpStatus.NOT_FOUND);

        await this.categoriaService.findById(produto.categoria.id);
        if (!produto.categoria.id) throw new HttpException('Categoria ID não encontrada', HttpStatus.NOT_FOUND);

        this.criarValidade(produto);
        return await this.produtoRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.produtoRepository.delete(id);
    }

    private criarValidade(produto: Produto) {
       const fabricacao = new Date(produto.dataFabricacao);
       const validade = new Date(produto.dataFabricacao);
       validade.setFullYear(fabricacao.getFullYear() + 1);

       produto.dataValidade = validade;

    }
}