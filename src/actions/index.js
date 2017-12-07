import axios from 'axios';
import lodash from 'lodash';

export const FETCH_PROJECTS = "fetch_projects";
export const FETCH_PROJECT = "fetch_project";
export const FETCH_CATEGORY = "fetch_category";

const PROJECT = [
    {
        id:0,
        title: 'Désherbés',
        description: 'Ce projet éditorial, mené à la Médiathéque Jean Falala de la ville de Reims sur les mois de novembre et de décembre 2013, s’intéresse aux différents ouvrages qui vont être définitivement retirés de la collection, soit parce qu’ils ne sont pas empruntés par le public, soit parce qu’ils vont être remplacés par une édition plus récente ou un autre support (version numérique). L’édition est divisée en dix catégories qui correspondent au système de classification Dewey des fonds de bibliothèque. Elle montre des ouvrages de chacune de ces catégories dans des compositions qui créent de nouvelles significations et de nouvelles images. Dans ce travail d’archivage, le fait d’emballer les ouvrages permet de traduire l’ambiance des sous-sols de la bibliothèque. L’édition joue sur la frustration du lecteur qui ne peut feuilleter les ouvrages qu’à travers les visuels qui lui sont proposés.',
        category: 'Livre',
        year:'2013',
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
            }
        ]
    },
    {
        id:1, 
        title: 'Association National des Visiteurs de Prison (ANVP)',
        description: 'Création d’une série de visuels pour L’Association Nationale des Visiteurs de Prison. La rencontre de la main du prisonnier avec celle du visiteur de prison forme un oiseau, symbole d’un espace de liberté et de solidarité au sein du milieu carcéral. Entretenir un lien avec l’extérieur pour le prisonnier c’est sortir un temps de son enferment et lutter contre l’isolement.',
        category: 'Identité visuelle',
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
        id:2, 
        title: 'Le projet 3',
        description: 'Morbi sit amet tellus et velit pretium consequat eu sed magna. Vestibulum non condimentum augue, quis accumsan magna.',
        category: 'Livre',
        year: '2016',
        images: [
            {
                src:"img9.jpg",
                index:0
            },
            {
                src:"img10.jpg",
                index:1
            },
            {
                src:"img11.jpg",
                index:2
            },
            {
                src:"img12.jpg",
                index:3
            }
        ]
    },
    {
        id:3, 
        title: 'Le projet 4',
        description: 'Sed nec porta mi. Nulla bibendum mi id tortor interdum, vitae hendrerit ipsum luctus. Vestibulum ligula ex, sagittis non gravida iaculis, vulputate non dui.',
        category: 'cat2',
        year: '2015',
        images: [
            {
                src:"img13.jpg",
                index:0
            },
            {
                src:"img14.jpg",
                index:1
            },
            {
                src:"img15.jpg",
                index:2
            },
            {
                src:"img16.jpg",
                index:3
            }
        ]
    }
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