import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Aqui você está fornecendo as rotas diretamente
    provideHttpClient()
  ]
}).catch(err => {
  console.error('Erro ao inicializar o aplicativo:', err);
  console.error('Erro detalhes:', err.stack);
});