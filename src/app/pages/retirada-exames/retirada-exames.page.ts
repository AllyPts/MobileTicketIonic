import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-retirada-exames',
  templateUrl: './retirada-exames.page.html',
  styleUrls: ['./retirada-exames.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class RetiradaExamesPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}