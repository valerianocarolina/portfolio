export interface ExperienceItemType {
  role: string
  company: string
  period: string
  description: string[]
}

export const experiences: ExperienceItemType[] = [
  {
    role: 'Desenvolvedora Frontend',
    company: 'Rethink Tecnologia',
    period: '2023 — Atual',
    description: [
      'Desenvolvimento e manutenção de aplicações mobile utilizando React Native e Redux.',
      'Colaboração com times de design e backend em sprints ágeis para entrega de funcionalidades.',
      'Implementação de arquitetura de componentes reutilizáveis utilizando TypeScript.',
      'Realização de code reviews, gerenciamento de fluxo Git e integração com pipelines de CI/CD.',
    ],
  },
  {
    role: 'Estagiária Frontend',
    company: 'Rethink Tecnologia',
    period: '2022 — 2023',
    description: [
      'Auxílio no desenvolvimento de componentes de interface para aplicações mobile com React Native.',
      'Aprendizado e aplicação de metodologias ágeis com participação em dailies e planejamento de sprints.',
      'Experiência com controle de versão utilizando Git e trabalho colaborativo em equipe.',
    ],
  },
]
