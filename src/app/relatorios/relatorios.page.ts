import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RelatoriosPage implements OnInit {

  // Totais que aparecem nos cards
  totalEmitidas: number = 0;
  totalAtendidas: number = 0;
  tempoMedioGeral: string = '0 min';

  // Contadores por categoria
  senhasSP: number = 0;  
  senhasSG: number = 0;  
  senhasSE: number = 0;  

  // Lista de atendimentos (Simulando vinda do MySQL)
  atendimentos: any[] = [
    { codigo: '260403-SP01', tipo: 'SP', emissao: '08:15', atendimento: '08:30', guiche: 1 },
    { codigo: '260403-SG01', tipo: 'SG', emissao: '08:20', atendimento: '08:25', guiche: 2 },
    { codigo: '260403-SE01', tipo: 'SE', emissao: '08:45', atendimento: '09:05', guiche: 1 },
    { codigo: '260403-SP02', tipo: 'SP', emissao: '09:00', atendimento: '09:10', guiche: 3 },
    { codigo: '260403-SG02', tipo: 'SG', emissao: '09:10', atendimento: null, guiche: null }
  ];

  constructor() { }

  ngOnInit() {
    this.atualizarRelatorio();
  }

  // Função principal que processa os dados da lista
  atualizarRelatorio() {
    this.totalEmitidas = this.atendimentos.length;
    this.totalAtendidas = this.atendimentos.filter(a => a.atendimento !== null).length;
    
    // Filtra contagem por tipo
    this.senhasSP = this.atendimentos.filter(a => a.tipo === 'SP').length;
    this.senhasSG = this.atendimentos.filter(a => a.tipo === 'SG').length;
    this.senhasSE = this.atendimentos.filter(a => a.tipo === 'SE').length;

    this.calcularTempoMedio();
  }

  // Lógica para calcular a média de tempo real entre emissão e atendimento
  calcularTempoMedio() {
    const realizados = this.atendimentos.filter(a => a.atendimento !== null);
    if (realizados.length === 0) {
      this.tempoMedioGeral = "0 min";
      return;
    }

    let somaMinutos = 0;

    realizados.forEach(item => {
      const [hE, mE] = item.emissao.split(':').map(Number);
      const [hA, mA] = item.atendimento.split(':').map(Number);
      
      const minEmissao = (hE * 60) + mE;
      const minAtendimento = (hA * 60) + mA;
      
      somaMinutos += (minAtendimento - minEmissao);
    });

    const media = Math.round(somaMinutos / realizados.length);
    this.tempoMedioGeral = `${media} min`;
  }

  // Validação do horário de expediente (07h às 17h)
  verificarExpediente() {
    const agora = new Date();
    const hora = agora.getHours();
    
    if (hora < 7 || hora >= 17) {
      alert("Aviso: Sistema fora do horário de atendimento.");
    } else {
      alert("Sistema operando dentro do horário.");
    }
  }
}