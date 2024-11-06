import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Universal'},
    {codEditora: 2, nome: 'Lindsey work'},
    {codEditora: 3, nome: 'New York News'},
    {codEditora: 4, nome: 'Planet book'}
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditoras(codEditora: number): string | undefined {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined
  }

  constructor() { }
}
