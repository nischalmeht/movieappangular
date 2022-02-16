import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
@Input() game!:Game
  constructor() { }

  ngOnInit(): void {
  }

}
