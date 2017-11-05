import React from 'react';

import ProjectList from '../containers/ProjectList';
import ProjectDetail from '../containers/ProjectDetail';

import ProjectViewer from './ProjectViewer';
import ProjectPagination from './ProjectPagination';
import PrevNext from './PrevNext';


const App = (props) => {

    return (
        <section>
            <ProjectList />
            <ProjectDetail />
        </section>
    );

}

export default App;