import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: 'tabela.component.html',
})
export class TabelaComponent {
  @Input() dados: Array<{ 
    id: number, 
    cultura_titulo: string,
    cultura_descricao: string,
    cultura_mapaCultural: string,
    cultura_imagem: string,
    cultura_fonteConfiavel: string,
    cultura_religiao: string,
    cultura_crenca: string,
    cultura_idioma: string,
    cultura_pais: string,
}> | null = null;
}