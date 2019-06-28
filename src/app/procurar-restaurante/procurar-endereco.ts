import { CepModel } from './model/cepMode.model';
import { ConsumirApiCorreioService } from '../services/consumirApiCorreio.service';
import { FormGroup, FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, OnInit, forwardRef } from '@angular/core';

@Component({
  selector: 'mt-procurar-endereco',
  templateUrl: './procurar-endereco.html',
  styleUrls: ['./procurar-restaurante.component.css'],
  providers:[{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ProcurarEnderecoComponent),
    multi: true
  }]
})
export class ProcurarEnderecoComponent implements OnInit {
  formGroup: FormGroup;
  cepControl: FormControl;
  dadosCep: CepModel;
  constructor(private formBuilder: FormBuilder, private api: ConsumirApiCorreioService) { }

  ngOnInit() {
    this.cepControl = this.formBuilder.control('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
    this.formGroup = this.formBuilder.group({
      cep: this.cepControl,
      city: this.formBuilder.control(''),
      state: this.formBuilder.control(''),
      district: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      number: this.formBuilder.control('')
    });
  }

  buscarDados() {
    if (this.formGroup.get('cep').valid) {
      this.api.retornarJsonApiCorreios(this.cepControl.value)
        .subscribe(resposta => {
          this.dadosCep = resposta;
          this.formGroup.get('city').setValue(this.dadosCep.city);
          this.formGroup.get('state').setValue(this.dadosCep.state);
          this.formGroup.get('district').setValue(this.dadosCep.district);
          this.formGroup.get('address').setValue(this.dadosCep.address);
          console.log(resposta);
        });
    } else {
      this.formGroup.get('city').setValue('');
      this.formGroup.get('state').setValue('');
      this.formGroup.get('address').setValue('');
      this.formGroup.get('district').setValue('');
      this.formGroup.get('number').setValue('');
    }
  }
}
