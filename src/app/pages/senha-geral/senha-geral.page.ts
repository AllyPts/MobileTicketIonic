import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-senha-geral',
  templateUrl: './senha-geral.page.html',
  styleUrls: ['./senha-geral.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class SenhaGeralPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}