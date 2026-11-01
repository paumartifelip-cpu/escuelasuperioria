/* Catálogo de cursos, en el orden recomendado de estudio.
 * Vídeo:  { id: 'ID_DE_YOUTUBE', title: '...' }
 * Módulo: { id (único), title, videos: [...] }
 * Curso:  { id (único), emoji, level, title, desc, modules: [...] } */
window.ESIA_COURSES = [
  {
    id: 'bases', emoji: '🌱', level: 'Principiante', title: 'Empieza con la IA',
    desc: 'Pierde el miedo a la IA: qué es, cómo funciona y cómo hablarle para que te responda bien.',
    modules: [
      {
        id: 'b1', title: 'Primeros pasos',
        videos: [
          { id: 'PU8MppMMcCo', title: 'Empieza tu viaje con la inteligencia artificial' },
          { id: '1DPMTG5LGwo', title: 'Entiende cómo funcionan los modelos de inteligencia artificial' }
        ]
      },
      {
        id: 'b2', title: 'Evita los errores de la IA',
        videos: [
          { id: '2braETkQGQ8', title: 'Por qué la inteligencia artificial miente (y cómo evitarlo)' }
        ]
      },
      {
        id: 'b3', title: 'Aprende a pedir bien',
        videos: [
          { id: 'XlvR6JTRuKo', title: 'Fundamentos del prompt engineering' },
          { id: '-h0PIjHWvbk', title: 'Los 5 mejores prompts en Google Gemini' }
        ]
      }
    ]
  },
  {
    id: 'asistentes', emoji: '🧠', level: 'Principiante', title: 'Tu asistente e investigador con IA',
    desc: 'Crea asistentes a tu medida, estudia e investiga con IA y conoce las herramientas de Google.',
    modules: [
      {
        id: 's1', title: 'Crea tus asistentes',
        videos: [
          { id: 'fvG6tuNeAdI', title: 'Asistentes de IA y Gems' }
        ]
      },
      {
        id: 's2', title: 'Investiga y estudia con IA',
        videos: [
          { id: 'pVxRXpbw1I0', title: 'Investigación en NotebookLM' }
        ]
      },
      {
        id: 's3', title: 'Conoce las herramientas de Google',
        videos: [
          { id: 'F3W5Twru-OQ', title: 'Google AI Studio: las IA de Google en un lugar' },
          { id: 'UGXuPonOrTQ', title: 'Nuevo Google Gemini Notebook: todo lo nuevo' }
        ]
      }
    ]
  },
  {
    id: 'imagenes', emoji: '🖼️', level: 'Intermedio', title: 'Crea imágenes con IA',
    desc: 'Imágenes, iconos y diseños profesionales sin saber diseñar.',
    modules: [
      {
        id: 'i1', title: 'Imágenes con Nano Banana',
        videos: [
          { id: 'qM7QGMTSTCw', title: 'Crea imágenes con Nano Banana' },
          { id: 'zIsRjcE0mrA', title: 'Google Nano Banana: modelos y trucos' }
        ]
      },
      {
        id: 'i2', title: 'Estilo propio e iconos',
        videos: [
          { id: '-9G0HDHUq_o', title: 'Crea imágenes del mismo estilo y iconos con Recraft' }
        ]
      },
      {
        id: 'i3', title: 'Google Pics y Canva',
        videos: [
          { id: 'xC7ZL1qYMic', title: 'Google Pics: 5 cosas que hace y ni Canva puede' },
          { id: 'fH6AXOtvR-M', title: 'Cómo conectar Canva con Gemini Spark mediante MCP' }
        ]
      }
    ]
  },
  {
    id: 'video', emoji: '🎬', level: 'Intermedio', title: 'Crea vídeos con IA',
    desc: 'De tu primera escena a vídeos completos: herramientas, modelos y trucos, sin cámara.',
    modules: [
      {
        id: 'v1', title: 'Vídeo con las herramientas de Google',
        videos: [
          { id: 'QO3MIleJ0Yo', title: 'Aprende a usar Flow con Veo 3' },
          { id: 'XTGB8muRWFM', title: 'Google Vids, editor de vídeo: crea vídeos para tu negocio' }
        ]
      },
      {
        id: 'v2', title: 'Higgsfield Katana',
        videos: [
          { id: 'g1dEqF_FAf8', title: 'Qué es Higgsfield Katana y cómo usarlo' }
        ]
      },
      {
        id: 'v3', title: 'Elige el mejor modelo de vídeo',
        videos: [
          { id: '5eKLC5kDNxk', title: 'Gemini Omni vs Veo 3.1, Kling 4.0 y Seedance 2.5: ¿cuál gana?' }
        ]
      },
      {
        id: 'v4', title: 'Vídeos de 30 segundos con Kling',
        videos: [
          { id: 'BpexGkDrzn4', title: 'Cómo hacer vídeos con IA de 30 segundos paso a paso (Kling 4.0)' }
        ]
      }
    ]
  },
  {
    id: 'marketing', emoji: '📣', level: 'Intermedio', title: 'Anuncios, influencers y presentaciones con IA',
    desc: 'Vídeos de producto, anuncios, influencers y avatares con IA para vender más.',
    modules: [
      {
        id: 'm1', title: 'Vídeo de producto y anuncios',
        videos: [
          { id: '3Vegf524ibs', title: 'Cómo hacer el vídeo de tu producto con IA (sin grabar)' },
          { id: 'u-UAU8P-w10', title: 'Cómo crear anuncios con IA para tu negocio (paso a paso)' }
        ]
      },
      {
        id: 'm2', title: 'Influencers y avatares con IA',
        videos: [
          { id: 'rQjaEciKElA', title: 'Cómo crear un influencer con IA en 3 pasos (sin cámara)' },
          { id: 'JHcJWzERWJM', title: 'Crea avatares con HeyGen' }
        ]
      },
      {
        id: 'm3', title: 'Presentaciones que venden',
        videos: [
          { id: 'dpoA2JEQeqw', title: 'Crea presentaciones con Gamma' }
        ]
      }
    ]
  },
  {
    id: 'spark', emoji: '🔷', level: 'Intermedio', title: 'Gemini Spark: tu agente que trabaja por ti',
    desc: 'Configura Gemini Spark, enséñale y deja que trabaje mientras duermes.',
    modules: [
      {
        id: 'p1', title: 'Empieza con Gemini Spark',
        videos: [
          { id: 'NTf2-xKYqtM', title: 'Qué es Gemini Spark' },
          { id: 'BUJVUaMofYQ', title: 'Cómo configurar Gemini Spark' }
        ]
      },
      {
        id: 'p2', title: 'Instrucciones y skills',
        videos: [
          { id: '8DjbIaaicTs', title: 'Cómo dar instrucciones a Gemini Spark' },
          { id: '2TCVcFndXA4', title: 'Qué son las Habilidades de Google Gemini (Skills)' },
          { id: 'Yzm6nXlBt78', title: 'Cómo crear skills en Gemini Spark' }
        ]
      },
      {
        id: 'p3', title: 'Que trabaje mientras duermes',
        videos: [
          { id: 'aIWWm1rwXd4', title: 'Cómo hacer que Gemini Spark trabaje mientras duermes' }
        ]
      }
    ]
  },
  {
    id: 'negocio', emoji: '💰', level: 'Intermedio', title: 'IA para tu negocio y tus redes',
    desc: 'Contenido para redes y tareas con IA para ahorrar tiempo y ganar dinero.',
    modules: [
      {
        id: 'n1', title: 'Contenido para redes',
        videos: [
          { id: 'AE9CyEzB6gM', title: 'Diez tareas de Gemini Spark para crear contenido' },
          { id: 'eY2IUEmDNo8', title: 'Cómo crear 30 publicaciones para redes con IA' }
        ]
      },
      {
        id: 'n2', title: 'Aplica la IA a tu negocio',
        videos: [
          { id: 'xUtWRFn8J2A', title: 'Gemini en Google Forms: crea formularios en segundos' },
          { id: 'L84s3QzqAJQ', title: 'Diez tareas de Gemini Spark para ayudarte a ganar dinero' }
        ]
      },
      {
        id: 'n3', title: 'Consigue clientes',
        videos: [
          { id: '9RpTC1mE2mw', title: 'Cómo extraer clientes de Google Maps con Apify (paso a paso)' }
        ]
      }
    ]
  },
  {
    id: 'antigravity', emoji: '💻', level: 'Avanzado', title: 'Crea tus propias apps con Google Antigravity',
    desc: '10 sesiones para construir y publicar apps desde cero, sin depender de nadie.',
    modules: [
      {
        id: 'a0', title: 'Qué es el vibe coding',
        videos: [
          { id: 'vbCUu1Fb5Uk', title: '¿Qué es el vibe coding? Explicado para principiantes' }
        ]
      },
      {
        id: 'a1', title: 'Fundamentos',
        videos: [
          { id: 'ApMWsOuHjPk', title: 'Sesión 1 · Introducción a Antigravity' },
          { id: 'bvEe4b2sBEk', title: 'Sesión 2 · Entiende los agentes en 5 minutos' }
        ]
      },
      {
        id: 'a2', title: 'Conecta y diseña',
        videos: [
          { id: 'ArlIVy6kWaY', title: 'Sesión 3 · Conecta tu agente al mundo con MCP' },
          { id: 'xZDS0XZCaPY', title: 'Sesión 4 · Crea interfaces con Google Stitch' }
        ]
      },
      {
        id: 'a3', title: 'Apps con IA dentro',
        videos: [
          { id: 'Vr1ickiFuCY', title: 'Sesión 5 · Trabaja con 5 apps a la vez' },
          { id: 'yFbMqe4qcQY', title: 'Sesión 6 · Mete IA dentro de tus aplicaciones' }
        ]
      },
      {
        id: 'a4', title: 'Código y base de datos',
        videos: [
          { id: 'MJfgHc9zGwM', title: 'Sesión 7 · Sube tus apps a GitHub' },
          { id: 'LitFHXjgpE0', title: 'Sesión 8 · Crea una app full stack con Supabase' }
        ]
      },
      {
        id: 'a5', title: 'Publica y organiza',
        videos: [
          { id: 'sc5WCMAEVC8', title: 'Sesión 9 · Publica tu web en internet' },
          { id: 'qEJ1Z-mY3Qc', title: 'Sesión 10 · Organiza tu ordenador con Antigravity' }
        ]
      }
    ]
  }
];
