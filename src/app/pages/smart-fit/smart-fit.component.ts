import { Component, inject, OnInit } from '@angular/core';
import { SmartApiService } from '../../services/smart-api.service';
import { CommonModule } from '@angular/common';
import { Location } from '../../models/smart-interface';
import { HeaderComponent } from '../../components/header/header.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-smart-fit',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CardsComponent,
    FormsModule,
    FooterComponent,
  ],
  templateUrl: './smart-fit.component.html',
  styleUrl: './smart-fit.component.css',
})
export class SmartFitComponent implements OnInit {
  locais: Location[] = []; // Variável para armazenar os dados dos locais
  locaisFiltrados: Location[] = []; // Variável para armazenar os locais filtrados
  horarioSelecionado: string = ''; // Variável para armazenar o horário selecionado
  exibirFechadas: boolean = false; // Variável para controlar a exibição de unidades fechadas
  mostrarResultados: boolean = false; // Variável para controlar a exibição dos resultados
  temUnidadesFechadas: boolean = false; // Variável para verificar se existem unidades fechadas

  private services = inject(SmartApiService); // Injetando o serviço SmartApiService

  ngOnInit(): void {
    this.services.getSmartFitLocations().subscribe({
      next: (res) => {
        this.locais = res.locations;
        this.temUnidadesFechadas = this.locais.some((local) => !local.opened);
      },
      error: (err) => {
        console.error('Erro ao buscar dados:', err);
      },
    });
  }

  filtrarLocais() {
    // 🔍 Filtra os locais com base nas regras do negócio (aberto/fechado + horário)
    this.locaisFiltrados = this.locais.filter((local) => {
      const estaFechado = !local.opened; // true se estiver fechada

      // ✅ Se o checkbox "Exibir unidades fechadas" estiver marcado,
      // queremos mostrar SOMENTE as unidades fechadas
      if (this.exibirFechadas) return estaFechado;

      // ❌ Se o checkbox NÃO estiver marcado, queremos ocultar as fechadas
      // Portanto, se a unidade está fechada, retornamos false para removê-la
      if (estaFechado) return false;

      // ⏰ Verifica se o horário selecionado está incluído nos horários da unidade
      const horarioCompativel = local.schedules.some((schedule) =>
        schedule.hour.includes(this.horarioSelecionado)
      );

      // 🧠 Se um horário foi selecionado, só retorna se bater
      // Caso nenhum horário tenha sido escolhido, retorna true e inclui tudo
      return this.horarioSelecionado ? horarioCompativel : false;
    });

    // ✅ Ativa a exibição dos resultados após aplicar os filtros
    this.mostrarResultados = true;

    // ⚠️ Se nenhuma unidade foi encontrada, exibe um alerta para o usuário
    if (this.locaisFiltrados.length === 0) {
      alert('Nenhuma unidade encontrada, por favor, preencha o formulario.');
    }
  }

  limparFiltro() {
    this.horarioSelecionado = '';
    this.exibirFechadas = false;
    this.mostrarResultados = false;
  }
}
