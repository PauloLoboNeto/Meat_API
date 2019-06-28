import { SharedModule } from './../shared/shared.module';
import { CadastroRestauranteComponent } from './cadastro-restaurante.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

const ROUTES: Routes = [
  { path: '', component: CadastroRestauranteComponent }
]

@NgModule({
  declarations: [CadastroRestauranteComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class CadastroModule { }
