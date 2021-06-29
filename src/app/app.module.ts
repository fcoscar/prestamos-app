import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { ClienteService } from './clientes/cliente.service';
import { FormComponent } from './clientes/form.component';
import { FormsModule } from '@angular/forms';
import { VerClienteComponent } from './clientes/verCliente.component';
import { PFormComponent } from './prestamos/pform.component';
import { PrestamoService } from './prestamos/prestamo.service';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: ClientesComponent},
  {path: 'cliente/form', component: FormComponent},
  {path: 'cliente/:clienteId', component: VerClienteComponent},
  {path: 'prestamo/form/:clienteId', component: PFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    VerClienteComponent,
    PFormComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ClienteService, PrestamoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
