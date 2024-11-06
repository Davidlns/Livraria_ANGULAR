import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'O Único Caminho', resumo: 'Resumo do Livro A', autores: ['Arthur Santos', 'Kim Harusame'] },
    { codigo: 2, codEditora: 2, titulo: 'Um novo Lar', resumo: 'Resumo do Livro B', autores: ['Bill Mark'] },
    { codigo: 3, codEditora: 3, titulo: 'O ultimo Jogo', resumo: 'Resumo do Livro C', autores: ['Caio Teixeira', 'Drumond Andrade'] },
    { codigo: 3, codEditora: 3, titulo: 'Uma Noite Apenas', resumo: 'Resumo do Livro D', autores: ['Carla Zetine', 'Leticia Padilha', 'André Viçosa'] }

  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
