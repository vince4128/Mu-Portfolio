import axios from 'axios';
import lodash from 'lodash';

export const FETCH_PROJECTS = "fetch_projects";
export const FETCH_PROJECT = "fetch_project";
export const FETCH_CATEGORY = "fetch_category";

const PROJECT = [
    {
        id:0,
        title: 'Le projet 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pretium commodo magna et dapibus. Nulla porta elementum ipsum et vehicula.',
        category: 'cat1',
        year:'2016',
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
        description: 'Vestibulum aliquam pellentesque tempus. Integer ut dignissim elit, in feugiat mauris. Donec in congue odio, vel mattis augue. Vivamus egestas pharetra egestas.',
        category: 'cat1',
        year: '2016',
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
        description: 'Morbi sit amet tellus et velit pretium consequat eu sed magna. Vestibulum non condimentum augue, quis accumsan magna.',
        category: 'cat2',
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
    const category = _.mapValues(_.groupBy(PROJECT, 'category'),
    clist => clist.map(cat => _.omit(cat, 'make')));

    console.log("category : " + JSON.stringify(category));

    return {
        type: FETCH_CATEGORY,
        payload: category
    }
}