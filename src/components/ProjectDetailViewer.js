import React, { Component } from 'react';

import ProjectDetailScreen from './ProjectDetailScreen';
import ProjectDetailPrevNext from './ProjectDetailPrevNext';
import ProjectDetailPagination from './ProjectDetailPagination';

class ProjectDetailViewer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImage: 0,
            totalImages: this.props.images.length
        };

        this.selectImage = this.selectImage.bind(this);

    };

    selectImage(img){
        this.setState({ currentImage: img})
    }

    componentWillReceiveProps(nextProps){
        this.setState({currentImage:0});
    }

    render(){
        return(
            <ul>
                {this.props.images.map((image) => {
                    return(
                        <section key={image.index}>
                        <ProjectDetailScreen 
                            currentImage={this.state.currentImage}
                            totalImages={this.state.totalImages}
                            selectImage={this.selectImage}
                            image={image}
                        />
                        <ProjectDetailPrevNext
                            selectImage={this.selectImage}
                            currentImage={this.state.currentImage}
                            totalImages={this.state.totalImages}
                        />
                        <ul className="c-projectPagination">
                        <ProjectDetailPagination
                            selectImage={this.selectImage}
                            currentImage={this.state.currentImage}
                            totalImages={this.state.totalImages}
                        />
                        </ul>
                        </section>
                    );
                })}
            </ul>
        )
    }

}

export default ProjectDetailViewer;