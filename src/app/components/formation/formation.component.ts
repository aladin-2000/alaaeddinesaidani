import { Component } from '@angular/core';

interface Formation {
  period: string;
  school: string;
  degree: string;
  location: string;
  url: string;
}

@Component({
  selector: 'app-formation',
  standalone: true,
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formations: Formation[] = [
    {
      period: '2021 — 2024',
      school: 'École Nationale d\'Ingénieurs de Tunis (ENIT)',
      degree: 'Diplôme d\'ingénieur',
      location: 'Tunis, Tunisie',
      url: 'https://enit.rnu.tn/'
    },
    {
      period: '2019 — 2021',
      school: 'Institut Préparatoire aux Études d\'Ingénieurs',
      degree: 'Cycle préparatoire',
      location: 'Tunis, Tunisie',
      url: 'https://ipeiem.rnu.tn/'
    }
  ];
}
