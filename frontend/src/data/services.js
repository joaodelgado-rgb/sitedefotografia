import { Camera, Heart, Users, Briefcase, Image, Video } from 'lucide-react'

const servicesData = [
  {
    id: 1,
    icon: Heart,
    title: 'Casamentos',
    description: 'Cobertura completa do seu grande dia, desde os preparativos até a festa. Registramos cada momento especial com sensibilidade e arte.',
    features: ['Cobertura completa 12h', 'Álbum digital', 'Pré-wedding incluso', 'Drone opcional'],
    price: 'A partir de R$ 3.500'
  },
  {
    id: 2,
    icon: Users,
    title: 'Retratos',
    description: 'Sessões individuais, casal, família ou grupo. Cada sessão é planejada para capturar a essência e personalidade de cada um.',
    features: ['Sessão 2h', 'Looks ilimitados', 'Galeria privada', 'Edição profissional'],
    price: 'A partir de R$ 600'
  },
  {
    id: 3,
    icon: Briefcase,
    title: 'Eventos',
    description: 'Eventos corporativos, formaturas, aniversários e celebrações. Cobertura discreta e profissional para não perder nenhum momento.',
    features: ['Cobertura 8h', 'Fotos em alta resolução', 'Entrega em 7 dias', 'Fotos extras incluídas'],
    price: 'A partir de R$ 1.800'
  },
  {
    id: 4,
    icon: Camera,
    title: 'Fashion',
    description: 'Ensaios fashion, editoriais, lookbooks e campanhas. Criatividade e técnica para resultados impactantes.',
    features: ['Direção criativa', 'Equipe completa', 'Maquiador incluso', 'Pós-produção avançada'],
    price: 'A partir de R$ 2.200'
  },
  {
    id: 5,
    icon: Image,
    title: 'Ensaios Externos',
    description: 'Sessões em locações externas selecionadas. Aproveitamos a luz natural e os cenários mais incríveis.',
    features: ['Locações exclusivas', 'Light móvel', '2h de sessão', '30 fotos editadas'],
    price: 'A partir de R$ 800'
  },
  {
    id: 6,
    icon: Video,
    title: 'Filmagem',
    description: 'Registre seus momentos em movimento. Filmagem profissional com edição cinematográfica.',
    features: ['Filmagem HD/4K', 'Drone incluso', 'Edição completa', 'Video highlight 3min'],
    price: 'A partir de R$ 2.800'
  }
]

export default servicesData

