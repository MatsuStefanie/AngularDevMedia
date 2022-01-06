import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {
  nomePai : string = 'Eduardo';
  novoNome : string  = '';
  constructor() { }

  ngOnInit(): void {
  }

  trocando(){
    this.nomePai = this.novoNome;
  }
}
