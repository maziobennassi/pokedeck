import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private toastr: ToastrService) { }

  public mensagemSucesso(mensagem: string): void {
    this.toastr.success(mensagem, "Sucesso")
  }

  public mensagemErro(mensagem: string): void {
    this.toastr.error(mensagem, "Erro")
  }

  public mensagemInformacao(mensagem: string): void {
    this.toastr.info(mensagem, "Informação")
  }

  public mensagemAlerta(mensagem: string): void {
    this.toastr.warning(mensagem, "Atenção")
  }
}