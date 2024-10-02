import { Routes } from '@angular/router';
import { CultureTemplateComponent } from './culture-template/culture-template.component';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { LayouHeaderComponent } from './layout-header/layou-header.component';

export const routes: Routes = [
  { path: '', component: LayouHeaderComponent },
  { path: 'culture/:id', component: CultureTemplateComponent }

];