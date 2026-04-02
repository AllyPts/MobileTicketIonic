import { Component } from '@angular/core';
import { QueueService } from '../core/services/queue'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  guicheSelecionado: number = 1; // Valor padrão
  senhaAtual: any = null;

  constructor(private queueService: QueueService) {}

  proximaSenha() {
    this.queueService.chamarProximo(this.guicheSelecionado).subscribe({
      next: (res) => {
        this.senhaAtual = res;
        console.log('Nova senha chamada:', res);
      },
      error: (err) => {
        console.error('Erro ao chamar senha', err);
        alert('Erro ao conectar com o servidor. O Node está rodando?');
      },
    });
  }
}
