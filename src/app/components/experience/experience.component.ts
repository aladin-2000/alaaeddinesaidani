import { Component } from '@angular/core';

interface RoleGroup {
  heading: string;
  items: string[];
}

interface Role {
  period: string;
  title: string;
  org: string;
  points?: string[];
  groups?: RoleGroup[];
  stack?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      period: 'Sept. 2024 — présent',
      title: 'Développeur Full Stack Java',
      org: 'Linedata — Tunis, Tunisie',
      groups: [
        {
          heading: 'Migration d\'un progiciel financier vers une architecture multi-modules',
          items: [
            'Analyse d\'un système legacy complexe : logiques métier imbriquées, procédures stockées et dépendances inter-modules, afin de garantir la reprise fidèle des règles métier',
            'Refonte et développement de plusieurs écrans de la nouvelle application Web, au sein d\'une équipe travaillant en méthode SCRUM',
            'Implémentation et gestion des mécanismes XSPE pour le contrôle dynamique des accès et des fonctionnalités'
          ]
        },
        {
          heading: 'Maintenance corrective — Produit EKIP360',
          items: [
            'Intervention sur le produit EKIP360 : traitement des tickets Jira remontés par les clients, de l\'analyse jusqu\'à la livraison du correctif',
            'Reproduction des bugs en environnement de test, analyse des logs et debugging côté back-end et front-end'
          ]
        }
      ],
      stack: ['Java 17', 'Spring', 'Sybase', 'Jira', 'SCRUM']
    },
    {
      period: 'Fév. 2024 — Août 2024',
      title: 'Stage PFE : Développeur Full Stack',
      org: 'Linedata — Tunis, Tunisie',
      groups: [
        {
          heading: 'Sujet : Conception et développement d\'un générateur de code',
          items: [
            'Mise en place d\'un pipeline ETL via Talend pour extraire les éléments structurels d\'une application Desktop, les transformer puis les charger dans des templates de code',
            'Génération automatique d\'une partie du code de l\'application Web, permettant une réduction significative du temps de développement',
            'Conception et développement d\'un générateur de fichiers XML basé sur les définitions de l\'application Desktop',
            'Automatisation de la configuration des écrans Web compatibles avec le framework 360'

          ]
        }
      ],
      stack: ['Java', 'Talend', 'ETL']
    },
    {
      period: 'Juil. 2022',
      title: 'Stage d\'été — Ingénieur Réseau',
      org: 'Tunisie Télécom — Tunis, Tunisie',
      points: [
        'Tests de connectivité et vérification du bon fonctionnement du réseau, en appui aux équipes techniques'
      ]
    }
  ];
}
