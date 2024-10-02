import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from "./data-display/data-display.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { CultureTemplateComponent } from "./culture-template/culture-template.component";
import { Location } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { LayouHeaderComponent } from './layout-header/layou-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataDisplayComponent, CommonModule, CultureTemplateComponent, HttpClientModule, CarouselComponent, LayouHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularFaculdadeFront';
  cultureId: string = '1'; // Defina o ID ou obtém de outra lógica
  postService: any;

  constructor( private router: Router) {}

  navigateToCulture(id: string): void {
    this.router.navigate(['culture/' + id])
  }

}
