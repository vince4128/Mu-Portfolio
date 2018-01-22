import axios from 'axios';
import lodash from 'lodash';

export const FETCH_PROJECTS = "fetch_projects";
export const FETCH_PROJECT = "fetch_project";
export const FETCH_CATEGORY = "fetch_category";

const PROJECT = [
    {
        id:0,
        title: 'Ton Dedans Devant',
        description: 'Le projet Ton Dedans Devant est né à l’occasion d’un workshop organisé par la danseuse Kaori Ito au Centre International de la Danse de Pantin. L’ensemble des participants étaient des néophytes n’ayant jamais eu vraiment l’occasion de danser devant les autres. Cette occasion d’apprendre à sortir de soi et à maîtriser les mouvements de son corps  à été pour moi l’occasion de réaliser un objet sur ce moment intime. Il comprend une série de photographies du danseur Antoine Mozziconacci ainsi qu’un petit livre contenant un dialogue écrit par mes soins.',
        shortdescription: 'Livre-objet Ton Dedans Devant — Centre International de la Danse de Pantin',
        category: 'Design éditorial',
        year:'2016',
        images: [
            {
                src:"DEVANT_5.jpg",
                index:0
            },
            {
                src:"DEVANT_2.jpg",
                index:1
            },
            {
                src:"DEVANT_3.jpg",
                index:2
            },
            {
                src:"DEVANT_4.jpg",
                index:3
            },
            {
                src:"DEVANT_1.jpg",
                index:4
            },
            {
                src:"DEVANT_6.jpg",
                index:5
            }
        ]
    },
    {
        id:1, 
        title: 'Marie m’a dit',
        description: 'Conception et réalisation d’une série d’affiches pour le spectacle de théâtre Marie m’a dit écrit et réalisé par le duo d’acteurs constitué de Véronique Jannaud et Paul Dorini.',
        shortdescription: 'Série d’affiches pour le spectacle de théâtre Marie m’a dit ',
        category:'Identité Visuelle',
        year: '2017',
        images: [
            {
                src:"MARIE_1.jpg",
                index:0
            },
            {
                src:"MARIE_2.jpg",
                index:1
            }
        ]
    },
    {
        id:2, 
        title: 'Association Nationale des Visiteurs de Prison (ANVP)',
        description: 'Création d’une série de visuels pour L’Association Nationale des Visiteurs de Prison. La rencontre de la main du prisonnier avec celle du visiteur de prison forme un oiseau, symbole d’un espace de liberté et de solidarité au sein du milieu carcéral. Entretenir un lien avec l’extérieur pour le prisonnier, c’est sortir un temps de son enfermement et lutter contre l’isolement.',
        shortdescription: 'Série de visuels pour l’Association Nationale des Visiteurs de Prison.',
        category: 'Identité Visuelle',
        year: '2015',
        images: [
            {
                src:"ANVP_1.jpg",
                index:0
            },
            {
                src:"ANVP_2.jpg",
                index:1
            },
            {
                src:"ANVP_3.jpg",
                index:2
            },
            {
                src:"ANVP_4.jpg",
                index:3
            },
            {
                src:"ANVP_5.jpg",
                index:4
            },
            {
                src:"ANVP_6.jpg",
                index:5
            },
            {
                src:"ANVP_7.jpg",
                index:6
            },
            {
                src:"ANVP_8.jpg",
                index:7
            },
            {
                src:"ANVP_9.jpg",
                index:8
            },
            {
                src:"ANVP_10.jpg",
                index:9
            }
        ]
    },
    {
        id:3, 
        title: 'Conversation',
        description: 'Conversation est un journal qui relie autour d’un thème commun écrivains, philosophes et photographes. Dans le premier numéro, Julien Gracq, Merleau-Ponty et Bill Brandt se retrouvent pour échanger sur le corps et sa relation au monde.',
        shortdescription: 'Premier numéro du journal Conversation.',
        category: 'Design éditorial',
        year: '2014',
        images: [
            {
                src:"CONV_1.jpg",
                index:0
            },
            {
                src:"CONV_2.jpg",
                index:1
            },
            {
                src:"CONV_3.jpg",
                index:2
            },
            {
                src:"CONV_4.jpg",
                index:3
            },
            {
                src:"CONV_5.jpg",
                index:4
            },
            {
                src:"CONV_6.jpg",
                index:5
            },
            {
                src:"CONV_7.jpg",
                index:6
            },
            {
                src:"CONV_8.jpg",
                index:7
            },
            {
                src:"CONV_9.jpg",
                index:8
            },
            {
                src:"CONV_10.jpg",
                index:9
            },
            {
                src:"CONV_11.jpg",
                index:10
            },
            {
                src:"CONV_12.jpg",
                index:11
            }
        ]
    },
    {
        id:4, 
        title: 'Parce qu’il ne faut pas seulement lire pour se souvenir',
        description: 'Conception et réalisation d’une invitation sous forme de dépliant sérigraphié pour une exposition des différentes installations que j’ai pu réaliser avec Laura Williams (designer graphique) et Karolina Howorko (scénographe et architecte) à L’École Nationale Supérieure des Art Décoratifs de Paris.',
        shortdescription: 'Dépliant d’invitation Parce qu’il ne faut pas seulement lire pour se souvenir',
        category: 'Identité Visuelle',
        year: '2016',
        images: [
            {
                src:"BOIS_1.jpg",
                index:0
            },
            {
                src:"BOIS_2.jpg",
                index:1
            },
            {
                src:"BOIS_3.jpg",
                index:2
            },
            {
                src:"BOIS_4.jpg",
                index:3
            },
            {
                src:"BOIS_5.jpg",
                index:4
            },
            {
                src:"BOIS_6.jpg",
                index:5
            },
            {
                src:"BOIS_7.jpg",
                index:6
            }
        ]
    },
    {
        id:5, 
        title: 'Grands-parrains',
        description: 'La mission de l’association Grands-parrains est de mettre en contact des personnes âgées et des enfants qui n’ont pas beaucoup de liens familiaux afin d’établir une relation affective durable. Pour parler de cette rencontre inter-générationnelle, l’identité visuelle développée associe deux univers graphiques : celui des vielles photos de familles à celui, plus spontané, des interventions manuelles. Les touches colorées évoquent l’énergie que les enfants peuvent apporter dans le vie des personnes âgées. Quant aux photos de familles, elles représentent les souvenirs que les deux générations vont pouvoir tisser ensemble grâce à l’association.',
        shortdescription: 'Identité visuelle pour l’association Grands-parrains',
        category: 'Identité Visuelle',
        year: '2015',
        images: [
            {
                src:"GP_1.jpg",
                index:0
            },
            {
                src:"GP_2.jpg",
                index:1
            },
            {
                src:"GP_3.jpg",
                index:2
            },
            {
                src:"GP_4.jpg",
                index:3
            },
            {
                src:"GP_5.jpg",
                index:4
            },
            {
                src:"GP_6.jpg",
                index:5
            },
            {
                src:"GP_7.jpg",
                index:6
            },
            {
                src:"GP_8.jpg",
                index:7
            },
            {
                src:"GP_9.jpg",
                index:8
            },
            {
                src:"GP_10.jpg",
                index:9
            }
        ]
    },
    {
        id:6, 
        title: 'Désherbés',
        description: 'Désherbés est un projet éditorial mené en partenariat avec la médiathèque Jean Falala de la ville de Reims. Un livre est réalisé tous les deux mois. Cette collection s’intéresse aux différents ouvrages qui vont être définitivement retirés de la bibliothèque (ouvrages dit « désherbés ») soit parce qu’ils ne sont plus empruntés par le public soit parce qu’ils vont être remplacés par une version numérique. Les livres qui disparaissent sont montrés dans l’ordre du système de classification  Dewey des fonds de bibliothèque. La collection constitue une nouvelle forme d’archivage de ses objets livres qui sombrent progressivement dans l’oubli.',
        shortdescription: 'Collection Désherbés — Médiathèque Jean Falala (Reims)',
        category: 'Design éditorial',
        year: '2013',
        images: [
            {
                src:"DES_1.jpg",
                index:0
            },
            {
                src:"DES_2.jpg",
                index:1
            },
            {
                src:"DES_3.jpg",
                index:2
            },
            {
                src:"DES_4.jpg",
                index:3
            },
            {
                src:"DES_5.jpg",
                index:4
            },
            {
                src:"DES_6.jpg",
                index:5
            },
            {
                src:"DES_7.jpg",
                index:6
            },
            {
                src:"DES_8.jpg",
                index:7
            },
            {
                src:"DES_9.jpg",
                index:8
            },
            {
                src:"DES_10.jpg",
                index:9
            },
            {
                src:"DES_11.jpg",
                index:10
            }
        ]
    },
    {
        id:7, 
        title: 'Aventurier',
        description: 'Conception d’une famille de caractères à l’occasion de l’exposition Aventuriers des Mers, de Simbad à Marco Polo à l’Institut du Monde Arabe. Les formes de lettres s’associent aux courbes des ondulations marines.',
        shortdescription: 'Dessin de caractères pour l’affiche Aventuriers des Mers, de Simbad à Marco Polo — Institut du Monde Arabe',
        category: 'Dessin de caractères',
        year: '2016',
        images: [
            {
                src:"AVENTURIERS_1.jpg",
                index:0
            },
            {
                src:"AVENTURIERS_2.jpg",
                index:1
            },
            {
                src:"AVENTURIERS_3.jpg",
                index:2
            },
            {
                src:"AVENTURIERS_4.jpg",
                index:3
            },
            {
                src:"AVENTURIERS_5.jpg",
                index:4
            },
            {
                src:"AVENTURIERS_6.jpg",
                index:5
            },
            {
                src:"AVENTURIERS_7.jpg",
                index:6
            },
            {
                src:"AVENTURIERS_8.jpg",
                index:7
            },
            {
                src:"AVENTURIERS_9.jpg",
                index:8
            },
            {
                src:"AVENTURIERS_10.jpg",
                index:9
            },
            {
                src:"AVENTURIERS_11.jpg",
                index:10
            }
        ]
    },
    {
        id:8, 
        title: 'Barbe Bleue',
        description: 'Dans cette installation participative, les visiteurs sont invités à jouer devant l’ordinateur des scènes clefs du conte de Charles Perrault, Barbe Bleue. Un espace de prises de vue ainsi que des costumes et des objets peints sont mis à leur disposition pour les aider dans cet échange complexe. L’ordinateur décrit en direct ce qu’il voit grâce à un logiciel de reconnaissance des images (Neural Talk 2). Les contresens et légendes absurdes que l’ordinateur peut produire sont bien loin du conte traditionnel. Elles sont pétries de références contemporaines (selfies, kite-surf, etc). Ainsi les légendes et les images que les visiteurs et l’ordinateur co-produisent forment une nouvelle couche au palimpseste du conte. Le résultat est un drôle de conte moderne co-écrit par l’homme et la machine.',
        shortdescription: 'Installation interactive Barbe Bleue — EnsAD',
        category: 'Installation interactive',
        year: '2016',
        images: [
            {
                src:"BB_1.jpg",
                index:0
            },
            {
                src:"BB_2.jpg",
                index:1
            },
            {
                src:"BB_3.jpg",
                index:2
            },
            {
                src:"BB_4.jpg",
                index:3
            },
            {
                src:"BB_5.jpg",
                index:4
            },
            {
                src:"BB_6.jpg",
                index:5
            },
            {
                src:"BB_7.jpg",
                index:6
            }
        ]
    },
    {
        id:9, 
        title: 'Aventuriers des Mers — IMA',
        description: 'Conception de l’affiche et des cartons d’invitation pour l’exposition Aventuriers des Mers, de Simbad à Marco Polo à l’Institut du Monde Arabe. Création à cette occasion d’une famille de caractères.Proposition non retenue',
        shortdescription: 'Affiche et cartons d’invitation.Exposition Aventuriers des Mers, de Simbad à Marco Polo — Institut du Monde Arabe',
        category: 'Identité Visuelle',
        year: '2016',
        images: [
            {
                src:"AVENTURIER_1.jpg",
                index:0
            },
            {
                src:"AVENTURIER_2.jpg",
                index:1
            },
            {
                src:"AVENTURIER_3.jpg",
                index:2
            },
            {
                src:"AVENTURIER_4.jpg",
                index:3
            },
            {
                src:"AVENTURIER_5.jpg",
                index:4
            },
            {
                src:"AVENTURIER_6.jpg",
                index:5
            }
        ]
    },
    {
        id:10, 
        title: 'Claire Bretécher',
        description: 'Réalisation aux côtés de Claire Mineur de la signalétique et de l’ensemble de la communication de l’exposition Claire Bretécher pour la Bibliothèque Publique d’Information du Centre Pompidou en novembre 2015.',
        shortdescription: 'Signalétique et communication . Exposition Claire Bretécher — Bibliothèque Publique d’Information du Centre Pompidou',
        category: 'Signalétique',
        year: '2015',
        images: [
            {
                src:"BRET_1.jpg",
                index:0
            },
            {
                src:"BRET_2.jpg",
                index:1
            },
            {
                src:"BRET_3.jpg",
                index:2
            },
            {
                src:"BRET_4.jpg",
                index:3
            },
            {
                src:"BRET_5.jpg",
                index:4
            },
            {
                src:"BRET_6.jpg",
                index:5
            },
            {
                src:"BRET_7.jpg",
                index:6
            }
        ]
    },
    {
        id:11, 
        title: 'Car ils laissent passer la lumière',
        description: 'Livre sur le travail du photographe Richard Carnevali réalisé chez Grand Ensemble avec Julien Gineste & Stéphanie Pré. L’oeil aguerri du photographe saisit au fil des pages, les danseurs, acteurs, chorégraphes et musiciens qui évoluent sur la scène du centre culturel de la ville de Collégien entre ombres et lumières.',
        shortdescription: 'Livre sur le travail du photographe Richard Carnevali',
        category: 'Design éditorial',
        year: '2015',
        images: [
            {
                src:"CARNE_1.jpg",
                index:0
            },
            {
                src:"CARNE_2.jpg",
                index:1
            },
            {
                src:"CARNE_3.jpg",
                index:2
            },
            {
                src:"CARNE_4.jpg",
                index:3
            },
            {
                src:"CARNE_5.jpg",
                index:4
            },
            {
                src:"CARNE_6.jpg",
                index:5
            },
            {
                src:"CARNE_7.jpg",
                index:6
            },
            {
                src:"CARNE_8.jpg",
                index:7
            }
        ]
    },
    {
        id:12, 
        title: 'Tryptique',
        description: 'Création d’une série d’affiches associant le travail du cinéaste Luis Bunuel à celui du peintre Goya. Les deux artistes partagent cette attirance pour l’inquiétante étrangeté qui habite notre monde. Le film La Voie Lactée est ainsi associé à La Prière au Jardin des Oliviers, tandis que Le Charme discret de la Bourgeoisie rencontre le Saturne dévorant ses Fils et que Le Fantôme de la Liberté joue avec le tableau illustrant les événements du 3 mai 1808.',
        shortdescription: 'Série d’affiches autour du cinéaste Luis Bunuel et du peintre Goya.',
        category: 'Affiche',
        year: '2014',
        images: [
            {
                src:"BUNUEL_1.jpg",
                index:0
            },
            {
                src:"BUNUEL_2.jpg",
                index:1
            },
            {
                src:"BUNUEL_3.jpg",
                index:2
            },
            {
                src:"BUNUEL_4.jpg",
                index:3
            }
        ]
    },
    {
        id:13, 
        title: 'Atelier Bastien Morin',
        description: 'Proposition de maquette pour le nouveau site internet de l’atelier Bastien Morin. Proposition non retenue.',
        shortdescription: 'Site internet de l’atelier Bastien Morin',
        category: 'Site Internet',
        year: '2017',
        images: [
            {
                src:"BUNUEL_1.jpg",
                index:0
            },
            {
                src:"BUNUEL_2.jpg",
                index:1
            }
        ]
    },
    {
        id:14, 
        title: 'Matthew Carter’s Galliard',
        description: 'Proposition de maquette pour le nouveau site internet de l’atelier Bastien Morin. Proposition non retenue.',
        shortdescription: 'Site internet de l’atelier Bastien Morin',
        category: 'Design éditorial',
        year: '2013',
        images: [
            {
                src:"CARTER_1.jpg",
                index:0
            },
            {
                src:"CARTER_2.jpg",
                index:1
            },
            {
                src:"CARTER_3.jpg",
                index:2
            },
            {
                src:"CARTER_4.jpg",
                index:3
            },
            {
                src:"CARTER_5.jpg",
                index:4
            },
            {
                src:"CARTER_6.jpg",
                index:5
            },
            {
                src:"CARTER_7.jpg",
                index:6
            },
            {
                src:"CARTER_8.jpg",
                index:7
            }
        ]
    },
    {
        id:15, 
        title: 'Cherokee mon chéri',
        description: 'Dessin d\'une famille de caractères de l\'alphabet Cherokee réalisé avec Laura Williams.Le Cherokee ne disposant actuellement que de peu de choix en matière de dessins de lettres, nous avons décidé de répondre à l’appel de Johannes Bergerhausen en développant une proposition pour l’écriture Cherokee. Ce travail s’inscrit dans le cadre d’une recherche typographique pour son projet Decodeunicod qui a pour but de faire que l’ensemble des lettres de tous les systèmes d’écritures soit présent dans un seul et même code, accessible à tous les utilisateurs d’ordinateurs. ',
        shortdescription: 'Dessin d\'une famille de caractères de l\'alphabet Cherokee.',
        category: 'Dessin de caractères',
        year: '2015',
        images: [
            {
                src:"cherokee_1.jpg",
                index:0
            },
            {
                src:"cherokee_2.jpg",
                index:1
            }
        ]
    },
    {
        id:16, 
        title: 'Édith & Claude',
        description: 'Deux sculptures identiques sont côte à côte. L’une est surélevée, l’autre est au sol. La première est tactile. Le spectateur doit parcourir avec ses doigts la surface ondulée qui se présente à lui. Petit à petit, la pellicule noire se dissipe sous la chaleur de ses mains laissant apparaître deux corps qui s’étreignent. La seconde, lui permet de comprendre ce qu’il entrevoit sous ses doigts. Elle lui révèle des extraits de la vidéo commune aux deux pièces.',
        shortdescription: 'Sculpture tactile et mapping vidéo pour l’installation Édith & Claude  — EnsAD',
        category: 'Installation interactive',
        year: '2016',
        images: [
            {
                src:"E&C_1.jpg",
                index:0
            },
            {
                src:"E&C_2.jpg",
                index:1
            },
            {
                src:"E&C_3.jpg",
                index:2
            }
        ]
    },
    {
        id:17, 
        title: 'Étapes',
        description: 'J’écris régulièrement des articles pour le magazine étapes, magazine de design et de culture visuelle. Toujours à l’affût de nouvelles créations et studios en matière de design graphique, mon rôle de journaliste me permet de découvrir régulièrement de nouveaux talents, de me tenir au courant de la scène contemporaine et de rencontrer des personnalités avec lesquelles je partage une passion commune.',
        shortdescription: 'Articles pour étapes magazine',
        category: 'Rédaction',
        year: '2017',
        images: [
            {
                src:"GENY_1.jpg",
                index:0
            },
            {
                src:"GENY_2.jpg",
                index:1
            },
            {
                src:"GENY_3.jpg",
                index:2
            },
            {
                src:"GENY_4.jpg",
                index:3
            },
            {
                src:"GENY_5.jpg",
                index:4
            },
            {
                src:"GENY_6.jpg",
                index:5
            },
            {
                src:"GENY_7.jpg",
                index:6
            }
        ]
    },
    {
        id:18, 
        title: 'Neue Jo',
        description: 'Le caractère Neue Jo est inspiré du travail typographique de Gérard Unger et notamment de son caractère Swift. Le nom du caractère Neue Jo pour Neue Jonathan s’inscrit dans la série des noms de ses typographies inspirées des Voyages de Gulliver : Swift, Gulliver …',
        shortdescription: 'Dessin de caractère Neue Jo',
        category: 'Dessin de caractères',
        year: '2013',
        images: [
            {
                src:"JO_1.jpg",
                index:0
            },
            {
                src:"JO_2.jpg",
                index:1
            },
            {
                src:"JO_3.jpg",
                index:2
            },
            {
                src:"JO_4.jpg",
                index:3
            },
            {
                src:"JO_5.jpg",
                index:4
            },
            {
                src:"JO_6.jpg",
                index:5
            },
            {
                src:"JO_7.jpg",
                index:6
            },
            {
                src:"JO_8.jpg",
                index:7
            },
            {
                src:"JO_9.jpg",
                index:8
            }
        ]
    },
    {
        id:19, 
        title: 'Les Ateliers du Lamantin',
        description: 'Conception et réalisation de l’identité visuelle d’un atelier réalisant des projets de vidéos et d’animations. Création du personnage du lamantin, réalisation du logotype animé et de leur carte de visite.',
        shortdescription: 'identité visuelle pour Les Ateliers du Lamantin',
        category: 'Identité Visuelle',
        year: '2017',
        images: [
            {
                src:"LAMENTIN_1.jpg",
                index:0
            },
            {
                src:"LAMENTIN_2.jpg",
                index:1
            }
        ]
    },
    {
        id:20, 
        title: 'Running Revolution',
        description: 'Conception de la maquette du livre Running Revolution dédié à 50 personnalités historiques de l’histoire de ce sport. Proposition non retenue.',
        shortdescription: 'Livre Running Revolution',
        category: 'Design éditorial',
        year: '2017',
        images: [
            {
                src:"RUN_1.jpg",
                index:0
            },
            {
                src:"RUN_2.jpg",
                index:1
            },
            {
                src:"RUN_3.jpg",
                index:2
            },
            {
                src:"RUN_4.jpg",
                index:3
            },
            {
                src:"RUN_5.jpg",
                index:4
            }
        ]
    },
    {
        id:21, 
        title: 'Nossa',
        description: 'Conception de l’identité visuelle du groupe de musique Nossa dirigée par Marina Kalhart. Réalisation des affiches de concert et de la carte de visite du groupe.',
        shortdescription: ' Identité visuelle pour le groupe de musique Nossa',
        category: 'Identité Visuelle',
        year: '2017',
        images: [
            {
                src:"Nossa_1.jpg",
                index:0
            },
            {
                src:"Nossa_2.jpg",
                index:1
            },
            {
                src:"Nossa_3.jpg",
                index:2
            },
            {
                src:"Nossa_4.jpg",
                index:3
            },
            {
                src:"Nossa_5.jpg",
                index:4
            },
            {
                src:"Nossa_6.jpg",
                index:5
            },
            {
                src:"Nossa_7.jpg",
                index:6
            }
        ]
    },
    {
        id:22, 
        title: 'Sanguine',
        description: 'Cette installation est un espace constitué de 8 panneaux en tissus qui sont autant de portes à franchir avant d’arriver à l’espace d’exposition. Sur les toiles, des phrases mystérieuses nous mettent peu à peu dans l’ambiance étrange qui se déploie tout au long de l’exposition inspirée de la nouvelle Sanguine de Bernard Quiriny. Cette installation a été réalisée avec Laura Williams (designer graphique) et Katarina Howorko (scénographe et architecte) à l’École Nationale Supérieure des Arts Décoratifs en juin 2016. ',
        shortdescription: 'Panneaux typographiques pour l’exposition Sanguine — EnsAD',
        category: 'Installation',
        year: '2016',
        images: [
            {
                src:"Tremblay_1.jpg",
                index:0
            },
            {
                src:"Tremblay_2.jpg",
                index:1
            },
            {
                src:"Tremblay_3.jpg",
                index:2
            }
        ]
    },
    {
        id:22, 
        title: 'Atelier Bastien Morin',
        description: 'Réalisation des prises de vues des derniers projets de l’Atelier Bastien Morin pour la sortie du nouveau site web de l’atelier.',
        shortdescription: 'Direction artistique et prises de vues — Atelier Bastien Morin',
        category: 'Direction Artistique',
        year: '2017',
        images: [
            {
                src:"DA_1.jpg",
                index:0
            },
            {
                src:"DA_2.jpg",
                index:1
            },
            {
                src:"DA_3.jpg",
                index:2
            },
            {
                src:"DA_4.jpg",
                index:3
            },
            {
                src:"DA_5.jpg",
                index:4
            },
            {
                src:"DA_6.jpg",
                index:5
            },
            {
                src:"DA_7.jpg",
                index:6
            },
            {
                src:"DA_8.jpg",
                index:7
            },
            {
                src:"DA_9.jpg",
                index:8
            },
            {
                src:"DA_10.jpg",
                index:9
            },
            {
                src:"DA_11.jpg",
                index:10
            }
        ]
    },
]

export function fetchProjects(){
    console.log("action fetchProjects lancée !");
    return {
        type: FETCH_PROJECTS,
        payload: PROJECT
    };
}

export function fetchProject(id){
    
    console.log("action fetchProject lancée !");
    const projects = _.mapKeys(PROJECT, "id");
    const project = _.get(projects, id);
    console.log("project : " + JSON.stringify(project));

    return {
        type: FETCH_PROJECT,
        payload: project
    }
}

export function fetchCategory(){
    console.log("action fetchCategory lancée !");
    //const category = _.mapValues(_.groupBy(PROJECT, 'category'),clist => clist.map(cat => _.omit(cat, 'category')));

    //const copyproject = clone(PROJECT);
    //const copyproject = JSON.parse(JSON.stringify(PROJECT));

    //2
    /*const copyproject = JSON.parse(JSON.stringify(PROJECT));

    const category = _.mapValues(_.groupBy(copyproject, 'category'),
    clist => clist.map(cat => _.omit(cat, 'make')));

    console.log("category : " + JSON.stringify(category));*/

    return {
        type: FETCH_CATEGORY,
        payload: PROJECT
    }
}

function clone(obj){
    if(obj == null || typeof(obj) != 'object'){
        return obj;
        alert('va muter');
    }
        
    var temp = new obj.constructor(); 
    for(var key in obj)
        temp[key] = clone(obj[key]);

    alert(JSON.stringify(temp));

    return temp;
}