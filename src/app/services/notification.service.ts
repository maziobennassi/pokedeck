import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }

  mensagemSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso")
  }

  mensagemErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro")
  }

  mensagemInformacao(mensagem: string): void {
    this.toastr.info(mensagem, "Informação")
  }

  mensagemAlerta(mensagem: string): void {
    this.toastr.warning(mensagem, "Atenção")
  }
}