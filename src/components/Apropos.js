import React, { Component } from 'react';

class Apropos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.isOpened = this.isOpened.bind(this);
        this.toggleDesc = this.toggleDesc.bind(this);
    }

    static defaultProps = {
        project: {
            description: ""
        }
    }

    toggleDesc() {
        this.setState({ open: !this.state.open })
    }

    isOpened() {
        if (this.state.open) {
            return "c-project-description--open";
        } else {
            return "c-project-description--close";
        }
    }

    componentDidMount() {
        //alert('desc did mount ' + JSON.stringify(this.props));
    }

    render() {

        //alert("description " + JSON.stringify(this.props.project));

        if (!this.props.txt) return null;

        return (

            <span>

                <span onClick={() => this.toggleDesc()}>
                    {this.props.txt}
                </span>

                <div className={"c-project-description " + this.isOpened()}>

                    <section className="c-project-description__desc animated fadeInUp">
                        <span>
                            <i className="c-project-description__btn--close fa fa-2x fa-times" aria-hidden="true" onClick={() => this.toggleDesc()}></i>

                            <p>Mon travail de designer graphique a principalement pour objet la direction artistique et la réalisation de livres, d’identités visuelles, d’affiches, de vidéos, de dessin de caractère et de sites internet.
                            Je mène parallèlement à ma pratique de designer graphique, une pratique quotidienne d’écriture. Je suis ainsi parfois consultée par des studios pour la rédaction et la mise en page de contenus. J’écris aussi régulièrement des articles pour étapes, magazine dedesign graphique et de culture visuelle.
                            Mon parcours :
                            <ul><li>⁃	Diplôme National d’Expression Plastique à l’École Nationale Supérieure des Arts Décoratifs de Paris — Master concepteur – créateur en design graphique & multimédia</li>
                            <li>⁃	Diplôme National d’Art Plastique en Design Graphique et Multimédia à l’Esad de Reims</li>
                            <li>⁃	Hypokhâgne et Khâgne — Classes préparatoires littéraires</li>
                            </ul>

J’ai eu l’occasion de travailler pour :
L’atelier Grand Ensemble, Le Bureau des Affaires Graphiques, Hachette, Solar, La Bpi du Centre Pompidou, L’atelier Bastien Morin, Either Studio, étapes magazine

J’ai eu l’occasion de participer à des workshops avec : les designers graphiques
Johannes Bürgerhausen, Pierre di Sciullo, Na Kim, Benoît Bonnemaison-Fitte, Émilie Rigaud ainsi que le designer d’objet Sébastien Cordoleani, et les artistes Mathieu Chamagne et Kaori Ito.

                            </p>
                        </span>
                    </section>

                </div>
            </span>
        )
    }


}

export default Apropos;