import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.css'
})
export class DataDisplayComponent implements OnInit {
  httpsClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.httpsClient.get('http://localhost:3000/culturas').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    })
  }
}
