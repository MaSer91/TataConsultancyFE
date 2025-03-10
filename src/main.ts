import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { AppModule } from './app.module'; // Import your AppModule

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });

  