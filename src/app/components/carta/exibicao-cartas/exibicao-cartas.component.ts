import { Component, Input, OnInit } from '@angular/core';
import { Carta } from 'src/app/models/carta';

@Component({
  selector: 'exibicao-cartas',
  templateUrl: './exibicao-cartas.component.html',
  styleUrls: ['./exibicao-cartas.component.css']
})
export class ExibicaoCartasComponent implements OnInit {

  @Input() carta: Carta;

  constructor() { }

  ngOnInit(): void {
  }

}
