import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Location } from '../../models/smart-interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() locais: Location[] = []; // Recebe os dados de locais como entrada
}
