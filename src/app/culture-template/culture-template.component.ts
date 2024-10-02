import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "../post.service";
import { inject } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { Router, RouterOutlet } from '@angular/router';

interface Cultura{
    id: string, 
    cultura_titulo: string,
    cultura_descricao: string,
    cultura_mapaCultural: string,
    cultura_imagem: string,
    cultura_fonteConfiavel: string,
    cultura_religiao: string,
    cultura_crenca: string,
    cultura_idioma: string,
    cultura_pais: string,
}

@Component({
    selector: 'culture-template-component',
    imports: [RouterOutlet],
    standalone: true,
    templateUrl: './culture-template.component.html',
    styleUrls: ['./culture-template.component.css']
})
export class CultureTemplateComponent implements OnInit {
  
  @Input() public cultureId ?: string;
  cultura ?: Cultura;
   
   constructor(private route: ActivatedRoute, private postService: PostService) { }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');  // Captura o id da rota
      if (id) {
        this.cultureId = id;
        console.log("Rota ID:", this.cultureId);

        // Fazer a requisição ao serviço usando o id capturado
        this.postService.getCultura(this.cultureId).subscribe({
          next: (data: Cultura) => {
            this.cultura = data;
            console.log("Dados da cultura:", this.cultura);
          },
          error: (err) => {
            console.error("Erro ao buscar cultura:", err);
          }
        });
      } else {
        console.error("ID não encontrado na rota");
      }
    });
   }
}