import { ActivatedRoute } from '@angular/router';
import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { ConsumirApiCorreioService } from './../services/consumirApiCorreio.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';
import { RestaurantsService } from 'app/services/restaurants.service';

@Component({
  selector: 'mt-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html'
})
export class CadastroRestauranteComponent implements OnInit {

  title: String;
  formGroup: FormGroup;
  restauranteModel: Restaurant;

  constructor(private formBuilder: FormBuilder, private api: ConsumirApiCorreioService,
    private activatedRoute: ActivatedRoute, private restService: RestaurantsService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.required]),
      category: this.formBuilder.control('', [Validators.required]),
      about: this.formBuilder.control('', [Validators.required]),
      hours: this.formBuilder.control('', [Validators.required])
    });

    if (this.activatedRoute.snapshot.params['id'] != null) {
      this.title = "Alteração dos dados do Restaurante";
      this.restService.restaurantById(this.activatedRoute.snapshot.params['id'])
        .subscribe(res => {
          this.restauranteModel = res;
          this.formGroup.get('nome').setValue(res.name);
          this.formGroup.get('category').setValue(res.category);
          this.formGroup.get('about').setValue(res.about);
          this.formGroup.get('hours').setValue(res.hours);
        });
    } else {
      this.title = "Cadastro de Restaurante";
    }
  }

  gravarFormulario() {
    this.restauranteModel.name = this.formGroup.get('nome').value;
    this.restauranteModel.category = this.formGroup.get('category').value;
    this.restauranteModel.about = this.formGroup.get('about').value;
    this.restauranteModel.hours = this.formGroup.get('hours').value;

    console.log("id " + this.restauranteModel.id)
    this.restService.atualizarRestaurante(this.restauranteModel.id, this.restauranteModel).subscribe(res => console.log(res));
  }
}
