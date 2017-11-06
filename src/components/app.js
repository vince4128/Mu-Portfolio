import React from 'react';

import ProjectList from '../containers/ProjectList';
import ProjectDetail from '../containers/ProjectDetail';

const App = (props) => {

    return (
        <section>
            <ProjectList />
            <ProjectDetail />
        </section>
    );

}

export default App;