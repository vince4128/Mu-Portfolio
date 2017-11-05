export function selectProject(project){
    return {
        type: 'PROJECT_SELECTED',
        payload: project
    };
}