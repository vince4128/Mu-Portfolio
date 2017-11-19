import axios from 'axios';
import lodash from 'lodash';

export const FETCH_PROJECTS = "fetch_projects";
export const FETCH_PROJECT = "fetch_project";

const PROJECT = [
    {
        id:0,
        title: 'Le projet 1',
        description: 'Blabla1',
        category: 'cat1',
        images: [
            {
                src:"img1.jpg",
                index:0
            },
            {
                src:"img2.jpg",
                index:1
            },
            {
                src:"img3.jpg",
                index:2
            },
            {
                src:"img4.jpg",
                index:3
            }
        ]
    },
    {
        id:1, 
        title: 'Le projet 2',
        description: 'Blabla2',
        category: 'cat1',
        images: [
            {
                src:"img5.jpg",
                index:0
            },
            {
                src:"img6.jpg",
                index:1
            },
            {
                src:"img7.jpg",
                index:2
            },
            {
                src:"img8.jpg",
                index:3
            }
        ]
    },
    {
        id:2, 
        title: 'Le projet 3',
        description: 'Blabla3',
        category: 'cat2',
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
        description: 'Blabla4',
        category: 'cat2',
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