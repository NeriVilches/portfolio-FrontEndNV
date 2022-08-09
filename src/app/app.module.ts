import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { HardAndSoftSkillsComponent } from './componentes/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaYEducacionComponent,
    HardAndSoftSkillsComponent,
    ProyectosComponent,
    FooterComponent
  ], 
  imports: [     //cuales son los bloques que necesita importar
    BrowserModule
  ],
  providers: [],  //proveedores de servicios
  bootstrap: [AppComponent]
})
export class AppModule { } //app.module.ts es una clase
