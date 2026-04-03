import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-senha-prioritaria',
  templateUrl: './senha-prioritaria.page.html',
  styleUrls: ['./senha-prioritaria.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class SenhaPrioritariaPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}