import { Component } from '@angular/core';
import { QueueService } from '../core/services/queue';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  guicheSelecionado: number = 1;
  senhaAtual: any = null;

  // Controle de estado para os botões do HTML
  statusAtendimento: 'livre' | 'chamou' | 'atendendo' = 'livre';

  constructor(private queueService: QueueService) {}

  // 1. Chamar a próxima senha da fila
  proximaSenha() {
    this.queueService.chamarProximo(this.guicheSelecionado).subscribe({
      next: (res) => {
        this.senhaAtual = res;
        this.statusAtendimento = 'chamou';
        console.log('Senha chamada com sucesso:', res);
      },
      error: (err) => {
        console.error('Erro ao conectar com a API Node:', err);
        // Feedback visual para o grupo não se perder nos testes
        alert(
          'API Offline: Verifique se o servidor Node.js está rodando na porta 3000',
        );
      },
    });
  }

  // 2. Iniciar o atendimento (Quando o cliente chega ao guichê)
  iniciarAtendimento() {
    if (this.senhaAtual) {
      this.statusAtendimento = 'atendendo';
      console.log('Atendimento iniciado para a senha:', this.senhaAtual.numero);
      // Aqui você poderia enviar um comando para a API avisando que o atendimento começou, se necessário.
    }
  }

  // 3. Finalizar atendimento (Libera o guichê para a próxima)
  finalizarAtendimento() {
    this.statusAtendimento = 'livre';
    this.senhaAtual = null;
    console.log('Guichê livre para nova chamada.');
  }
}
