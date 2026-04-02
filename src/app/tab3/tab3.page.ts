import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { QueueService } from '../core/services/queue';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page implements OnInit, OnDestroy {
  ultimasSenhas: any[] = [];
  private pollingSub?: Subscription;

  constructor(private queueService: QueueService) {}

  ngOnInit() {
    this.atualizarPainel();

    // Polling a cada 3 segundos
    this.pollingSub = interval(3000).subscribe(() => {
      this.atualizarPainel();
    });
  }

  atualizarPainel() {
    this.queueService.getUltimasChamadas().subscribe({
      next: (dados: any) => {
        this.ultimasSenhas = dados;
      },
      error: (err: any) =>
        console.error('Erro ao conectar com o servidor', err),
    });
  }

  ngOnDestroy() {
    if (this.pollingSub) {
      this.pollingSub.unsubscribe();
    }
  }
}
