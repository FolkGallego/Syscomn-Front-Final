import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CurralPiquete } from 'src/app/models/curralpiquete';
import { Lote } from 'src/app/models/lote';
import { CurralpiqueteService } from 'src/app/services/curralpiquete.service';
import { LoteService } from 'src/app/services/lote.service';

@Component({
  selector: 'app-lote-create',
  templateUrl: './lote-create.component.html',
  styleUrls: ['./lote-create.component.css']
})
export class LoteCreateComponent implements OnInit {

  lote: Lote = {
    idLote: '',
    descricao: '',
    nroLote: 0,
    pesoEntrada: 0,
    pesoAtual: 0,
    custoLote: 0,
    qtdeCabecasEntrada: 0,
    qtdeCabecasMorte: 0,
    qtdeCabecasAtual: 0,
    statusLote: '',
    curralPiquete: '',
    descricaoCurralPiquete: '',
    dataInicio: undefined,
    dataFinal: undefined,
  }

  lscurralPiquete: CurralPiquete[] = []

  descricao: FormControl = new FormControl(null, [Validators.required]);
  nroLote: FormControl = new FormControl(null, [Validators.required]);
  qtdeCabecasEntrada: FormControl = new FormControl(null, [Validators.required]);
  statusLote: FormControl = new FormControl(null, [Validators.required]);
  curralPiquete: FormControl = new FormControl(null, [Validators.required]);

  constructor(
    private loteService:          LoteService,
    private curralpiqueteService: CurralpiqueteService,
    private toastService:         ToastrService,
    private router:               Router,
    ) { }

  ngOnInit(): void {
    this.findAllCurralPiquete();
  }

  create(): void {
    this.loteService.create(this.lote).subscribe(resposta => {
      this.toastService.success('Lote criado com sucesso', 'Novo Lote');
      this.router.navigate(['lote']);
    }, ex => {
      console.log(ex);
      
      this.toastService.error(ex.error.error);
    })
  }

  findAllCurralPiquete(): void {
   this.curralpiqueteService.findAll().subscribe(resposta => {
     this.lscurralPiquete = resposta;
  })
  }

  validaCampos(): boolean {
  return this.descricao.valid 
  && this.nroLote.valid 
  && this.qtdeCabecasEntrada.valid 
  && this.statusLote.valid
  && this.curralPiquete.valid
  }

  somenteNumeros(e: any) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
  
    if (charCode != 8 && charCode != 9) {
      // charCode 48 equivale a 0   
      // charCode 57 equivale a 9
    let max = 3;    
 

      if ((charCode < 48 || charCode > 57)||(e.target.value.length >= max)) return false;
      else return true
    }else return false
  
  }

}

