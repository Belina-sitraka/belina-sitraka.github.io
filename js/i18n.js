/* =========================================================
   TRADUCTIONS — FR / EN
   ---------------------------------------------------------
   Pour modifier un texte : change la valeur dans la langue voulue.
   Pour ajouter une langue : copie le bloc "en", renomme-le (ex. "mg"),
   puis ajoute un bouton dans .lang-switch (index.html).
   Les textes de l'HTML (anglais) servent de repli si JavaScript est coupé.
   ========================================================= */
window.I18N = {
  en: {
    meta: {
      title: "BELINA Fitahintsoa — Indie Game Developer from Madagascar",
      desc: "Portfolio of BELINA Fitahintsoa, indie game developer and game designer from Madagascar. 2D games, interactive worlds and original gameplay."
    },
    skip: "Skip to content",
    menu: { open: "Open menu", close: "Close menu", lang: "Language" },
    nav: { about: "About", projects: "Projects", skills: "Skills", journey: "Journey", contact: "Contact" },
    hero: {
      badge: "GAME DEVELOPER FROM MADAGASCAR",
      lead: "I build interactive worlds, create gameplay experiences and bring original game concepts to life.",
      cta1: "EXPLORE MY PROJECTS",
      cta2: "CONTACT ME",
      scroll: "SCROLL"
    },
    about: {
      eyebrow: "01 / ABOUT",
      title: "ABOUT THE DEVELOPER",
      photoAlt: "Portrait of BELINA Fitahintsoa",
      lead: "I'm a computer science student passionate about programming and video game creation. I'm particularly interested in game design, gameplay, world-building and 2D game development.",
      p2: "My goal is to progressively develop my technical and artistic skills in order to create original gaming experiences.",
      profile: { h: "Profile", p: "Indie game developer, game designer and computer science student, based in Madagascar." },
      academic: { h: "Academic path", p: "Bachelor's, year 2 (Licence 2) — Computer Technology." },
      interests: { h: "Interests", p: "Programming, game design, gameplay, world-building and 2D games." },
      goals: { h: "Goals", p: "Grow my technical and artistic skills to create original experiences." }
    },
    projects: {
      eyebrow: "02 / PROJECTS",
      title: "MY PROJECTS",
      sub: "Two worlds, two approaches to gameplay. Cover visuals are conceptual illustrations; real screenshots will be added as development progresses.",
      view: "VIEW PROJECT",
      statusDev: "IN DEVELOPMENT",
      statusConcept: "CONCEPT / DEVELOPMENT",
      lbl: { genre: "Genre", art: "Art style", artDir: "Art direction", combat: "Combat", modes: "Modes", engine: "Engine", status: "Status", story: "Narrative" },
      cendres: {
        coverAlt: "Conceptual illustration for Les Cendres de Néra",
        genre: "ACTION RPG 2D",
        desc: "A 2D Action RPG in dark, detailed pixel art. The player explores, fights in real time and progresses through a linear story whose ending changes depending on their choices.",
        vGenre: "2D Action RPG",
        vArt: "Dark Detailed Pixel Art",
        vCombat: "Real time",
        vStatus: "In Development",
        tags: ["Exploration", "Combat", "Progression", "Storytelling", "Multiple endings"],
        modal: {
          paras: [
            "A 2D Action RPG in dark, detailed pixel art. The player explores a ruined world, fights enemies in real time and grows stronger through a linear story.",
            "Their choices shape how it ends: the story offers several endings."
          ],
          bullets: ["Exploration", "Real-time combat", "Progression", "Storytelling with multiple endings"],
          meta: [
            ["Genre", "2D Action RPG"],
            ["Art style", "Dark Detailed Pixel Art"],
            ["Combat", "Real time"],
            ["Narrative", "Linear story, several endings depending on the player's choices"],
            ["Engine", "Godot Engine"],
            ["Status", "In Development"]
          ]
        }
      },
      zombie: {
        coverAlt: "Conceptual illustration for Zombie Survival",
        genre: "TOP-DOWN 2D ZOMBIE SURVIVAL SHOOTER",
        desc: "A top-down survival shooter set in a dark, post-apocalyptic world. Aim with the mouse, move in every direction and hold off hordes of zombies.",
        vGenre: "Top-Down 2D Shooter",
        vArtDir: "Dark, post-apocalyptic",
        vModes: "Solo · co-op to be developed",
        vStatus: "Concept / Development",
        tags: ["Hordes", "Mouse aiming", "Progressive difficulty", "Progression"],
        modal: {
          paras: ["A top-down survival shooter set in a dark, post-apocalyptic world."],
          bullets: [
            "Fight against hordes of zombies",
            "Mouse aiming",
            "Movement in every direction",
            "Solo mode, co-op to be developed",
            "Progressive difficulty",
            "Progression system"
          ],
          meta: [
            ["Genre", "Top-Down 2D Zombie Survival Shooter"],
            ["Art direction", "Dark, post-apocalyptic world"],
            ["Modes", "Solo · co-op to be developed"],
            ["Engine", "Godot Engine"],
            ["Status", "Concept / Development"]
          ]
        }
      },
      modal: {
        gallery: "GALLERY",
        empty: "Screenshots will be added as development progresses.",
        close: "Close",
        enlarge: "Enlarge image",
        imgAlt: "image",
        lbClose: "Close image",
        lbPrev: "Previous image",
        lbNext: "Next image"
      }
    },
    skills: {
      eyebrow: "03 / SKILLS",
      title: "TECHNICAL SKILLS",
      game: "GAME DEVELOPMENT",
      web: "WEB DEVELOPMENT",
      cs: "COMPUTER SCIENCE",
      g2d: "2D Game Development",
      mech: "Game Mechanics",
      responsive: "Responsive Web Design",
      algo: "Algorithms",
      prog: "Programming",
      pm: "IT project management",
      solve: "Technical problem solving"
    },
    edu: {
      eyebrow: "04 / JOURNEY",
      title: "EDUCATION & EXPERIENCE",
      academic: "ACADEMIC BACKGROUND",
      certs: "CERTIFICATIONS",
      exp: "EXPERIENCE",
      l2: "Bachelor's, year 2 (Licence 2) — Computer Technology",
      l2p: "Currently studying.",
      bac: "Baccalauréat, A2 series",
      web: "Web Manager training completion certificate",
      honorIt: "Certificate of honor and merit in IT (Web)",
      honorCom: "Certificate of honor and merit in communication",
      imtech: "Internship in IT maintenance and technical support.",
      netpro: "Internship in network administration and systems maintenance."
    },
    contact: {
      eyebrow: "05 / CONTACT",
      title: "LET'S CREATE SOMETHING GREAT.",
      sub: "Have a project, an idea or an opportunity? Let's connect and build something amazing.",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Location",
      socials: "Social links",
      cv: "DOWNLOAD CV",
      cvMissing: "My CV will be available soon.",
      name: "Name",
      subject: "Subject",
      message: "Message",
      send: "SEND MESSAGE",
      defaultSubject: "Portfolio contact",
      errName: "Please enter your name (at least 2 characters).",
      errEmail: "Please enter a valid email address.",
      errMessage: "Your message must be at least 10 characters long.",
      sending: "Sending…",
      ok: "Message sent. Thank you, I'll get back to you soon!",
      fail: "Sending failed. Please try again, or email me directly.",
      mailto: "Your mail app will open with the message pre-filled. Just hit send."
    },
    footer: { copy: "© {year} BELINA Fitahintsoa Sitraka Ismael — Indie Game Developer", top: "BACK TO TOP ↑" }
  },

  fr: {
    meta: {
      title: "BELINA Fitahintsoa — Développeur de jeux vidéo indépendant à Madagascar",
      desc: "Portfolio de BELINA Fitahintsoa, développeur de jeux vidéo indépendant et game designer à Madagascar. Jeux 2D, univers interactifs et gameplay original."
    },
    skip: "Aller au contenu",
    menu: { open: "Ouvrir le menu", close: "Fermer le menu", lang: "Langue" },
    nav: { about: "À propos", projects: "Projets", skills: "Compétences", journey: "Parcours", contact: "Contact" },
    hero: {
      badge: "DÉVELOPPEUR DE JEUX · MADAGASCAR",
      lead: "Je construis des mondes interactifs, je crée des expériences de jeu et je donne vie à des concepts de jeux originaux.",
      cta1: "DÉCOUVRIR MES PROJETS",
      cta2: "ME CONTACTER",
      scroll: "DÉFILER"
    },
    about: {
      eyebrow: "01 / À PROPOS",
      title: "À PROPOS DU DÉVELOPPEUR",
      photoAlt: "Portrait de BELINA Fitahintsoa",
      lead: "Je suis un étudiant en informatique passionné par la programmation et la création de jeux vidéo. Je m'intéresse particulièrement au game design, au gameplay, à la conception d'univers et au développement de jeux 2D.",
      p2: "Mon objectif est de développer progressivement mes compétences techniques et artistiques afin de créer des expériences vidéoludiques originales.",
      profile: { h: "Profil", p: "Développeur de jeux indépendant, game designer et étudiant en informatique, basé à Madagascar." },
      academic: { h: "Parcours académique", p: "Licence 2 — Technologie Informatique." },
      interests: { h: "Centres d'intérêt", p: "Programmation, game design, gameplay, conception d'univers et jeux 2D." },
      goals: { h: "Objectifs", p: "Faire progresser mes compétences techniques et artistiques pour créer des expériences originales." }
    },
    projects: {
      eyebrow: "02 / PROJETS",
      title: "MES PROJETS",
      sub: "Deux univers, deux approches du gameplay. Les visuels de couverture sont des illustrations conceptuelles ; les captures réelles seront ajoutées avec l'avancement du développement.",
      view: "VOIR LE PROJET",
      statusDev: "EN DÉVELOPPEMENT",
      statusConcept: "CONCEPT / DÉVELOPPEMENT",
      lbl: { genre: "Genre", art: "Style graphique", artDir: "Direction artistique", combat: "Combat", modes: "Modes", engine: "Moteur", status: "Statut", story: "Narration" },
      cendres: {
        coverAlt: "Illustration conceptuelle de Les Cendres de Néra",
        genre: "ACTION RPG 2D",
        desc: "Un Action RPG 2D en pixel art sombre et détaillé. Le joueur explore, combat en temps réel et progresse dans une histoire linéaire dont l'issue change selon ses choix.",
        vGenre: "Action RPG 2D",
        vArt: "Dark Detailed Pixel Art",
        vCombat: "Temps réel",
        vStatus: "En développement",
        tags: ["Exploration", "Combats", "Progression", "Narration", "Plusieurs fins"],
        modal: {
          paras: [
            "Un Action RPG 2D en pixel art sombre et détaillé. Le joueur explore un monde en ruines, affronte ses ennemis en temps réel et gagne en puissance au fil d'une histoire linéaire.",
            "Ses choix influencent la conclusion : le récit propose plusieurs fins."
          ],
          bullets: ["Exploration", "Combats en temps réel", "Progression", "Narration à fins multiples"],
          meta: [
            ["Genre", "Action RPG 2D"],
            ["Style graphique", "Dark Detailed Pixel Art"],
            ["Combat", "Temps réel"],
            ["Narration", "Histoire linéaire, plusieurs fins selon les choix du joueur"],
            ["Moteur", "Godot Engine"],
            ["Statut", "En développement"]
          ]
        }
      },
      zombie: {
        coverAlt: "Illustration conceptuelle de Zombie Survival",
        genre: "TOP-DOWN 2D ZOMBIE SURVIVAL SHOOTER",
        desc: "Un shooter de survie en vue du dessus, dans un univers sombre et post-apocalyptique. Visée à la souris, déplacements dans toutes les directions et hordes de zombies à repousser.",
        vGenre: "Shooter 2D en vue du dessus",
        vArtDir: "Sombre, post-apocalyptique",
        vModes: "Solo · coopération à développer",
        vStatus: "Concept / Développement",
        tags: ["Hordes", "Visée souris", "Difficulté progressive", "Progression"],
        modal: {
          paras: ["Un shooter de survie en vue du dessus, dans un univers sombre et post-apocalyptique."],
          bullets: [
            "Combat contre des hordes de zombies",
            "Visée à la souris",
            "Déplacements dans toutes les directions",
            "Mode solo, coopération à développer",
            "Difficulté progressive",
            "Système de progression"
          ],
          meta: [
            ["Genre", "Top-Down 2D Zombie Survival Shooter"],
            ["Direction artistique", "Univers sombre et post-apocalyptique"],
            ["Modes", "Solo · coopération à développer"],
            ["Moteur", "Godot Engine"],
            ["Statut", "Concept / Développement"]
          ]
        }
      },
      modal: {
        gallery: "GALERIE",
        empty: "Les captures d'écran seront ajoutées au fil du développement.",
        close: "Fermer",
        enlarge: "Agrandir l'image",
        imgAlt: "image",
        lbClose: "Fermer l'image",
        lbPrev: "Image précédente",
        lbNext: "Image suivante"
      }
    },
    skills: {
      eyebrow: "03 / COMPÉTENCES",
      title: "COMPÉTENCES TECHNIQUES",
      game: "DÉVELOPPEMENT DE JEUX",
      web: "DÉVELOPPEMENT WEB",
      cs: "INFORMATIQUE",
      g2d: "Développement de jeux 2D",
      mech: "Mécaniques de jeu",
      responsive: "Web design responsive",
      algo: "Algorithmique",
      prog: "Programmation",
      pm: "Gestion de projets informatiques",
      solve: "Résolution de problèmes techniques"
    },
    edu: {
      eyebrow: "04 / PARCOURS",
      title: "FORMATION & EXPÉRIENCE",
      academic: "FORMATION ACADÉMIQUE",
      certs: "CERTIFICATIONS",
      exp: "EXPÉRIENCES",
      l2: "Licence 2 — Technologie Informatique",
      l2p: "Formation en cours.",
      bac: "Baccalauréat, série A2",
      web: "Certificat de fin de formation Web Manager",
      honorIt: "Certificat d'honneur et de mérite en informatique (Web)",
      honorCom: "Certificat d'honneur et de mérite en communication",
      imtech: "Stage en maintenance informatique et support technique.",
      netpro: "Stage en administration réseau et maintenance des systèmes."
    },
    contact: {
      eyebrow: "05 / CONTACT",
      title: "CRÉONS QUELQUE CHOSE DE GRAND.",
      sub: "Un projet, une idée ou une opportunité ? Échangeons et construisons quelque chose d'incroyable.",
      email: "Email",
      whatsapp: "WhatsApp",
      location: "Localisation",
      socials: "Réseaux sociaux",
      cv: "TÉLÉCHARGER MON CV",
      cvMissing: "Mon CV sera bientôt disponible.",
      name: "Nom",
      subject: "Objet",
      message: "Message",
      send: "ENVOYER LE MESSAGE",
      defaultSubject: "Contact depuis le portfolio",
      errName: "Veuillez saisir votre nom (2 caractères minimum).",
      errEmail: "Veuillez saisir une adresse email valide.",
      errMessage: "Votre message doit contenir au moins 10 caractères.",
      sending: "Envoi en cours…",
      ok: "Message envoyé. Merci, je vous réponds très vite !",
      fail: "L'envoi a échoué. Réessayez, ou écrivez-moi directement par email.",
      mailto: "Votre application mail va s'ouvrir avec le message prérempli. Il ne reste qu'à l'envoyer."
    },
    footer: { copy: "© {year} BELINA Fitahintsoa Sitraka Ismael — Développeur de jeux indépendant", top: "RETOUR EN HAUT ↑" }
  }
};
