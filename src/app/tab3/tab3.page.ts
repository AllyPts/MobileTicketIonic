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
  // Inicializamos como array vazio para evitar erros no HTML antes da primeira carga
  ultimasSenhas: any[] = [
    // Usei esses objetos para teste, remover quando a API estiver pronta
    { numero: 'A001', guiche: 1 },
    { numero: 'A002', guiche: 2 },
  ];
  private pollingSub?: Subscription;

  constructor(private queueService: QueueService) {}

  ngOnInit() {
    // Primeira carga imediata ao abrir a tela
    this.atualizarPainel();

    // Polling a cada 3 segundos
    // Usamos o interval para manter o painel sempre atualizado com o banco de dados
    this.pollingSub = interval(3000).subscribe(() => {
      this.atualizarPainel();
    });
  }

  atualizarPainel() {
    this.queueService.getUltimasChamadas().subscribe({
      next: (dados: any) => {
        // Só atualizamos se houver dados novos, evitando renderizações desnecessárias
        if (dados) {
          this.ultimasSenhas = dados;
        }
      },
      error: (err: any) => {
        // Log discreto no console para não poluir a experiência do usuário
        console.warn('Painel: Aguardando conexão com a API Node.js...');
      },
    });
  }

  ngOnDestroy() {
    // Limpeza crucial: interrompe a contagem de 3 segundos ao fechar a página
    if (this.pollingSub) {
      this.pollingSub.unsubscribe();
      console.log('Polling encerrado.');
    }
  }
}
