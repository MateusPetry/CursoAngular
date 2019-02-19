import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from "rxjs/operators";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any={
    nome: null,
    email: null
  }

  onSubmit(formulario){
    console.log(formulario);
    //console.log(this.usuario);
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
    .pipe(map(res => res))
    .subscribe(dados => {
      console.log(dados);
      formulario.form.reset();
    });
  }

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return{
      'was-validated': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form){
    cep = cep.replace(/\D/g, '');

    if(cep !=null && cep !==''){
      this.cepService.consultaCEP(cep)
      .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, formulario){
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   Endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });

    formulario.form.patchValue({
      Endereco: {
     // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

  resetaDadosForm(formulario){
    formulario.form.patchValue({
      Endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

}