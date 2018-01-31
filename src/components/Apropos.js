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

                <span className="c-menu--centered" onClick={() => this.toggleDesc()}>
                    {this.props.txt}
                </span>

                <div className={"c-project-description " + this.isOpened()}>

                    <section className="c-project-description__desc animated fadeInUp">                        
                        <p className="c-project-description__btn--close"><span><a onClick={()=>this.toggleDesc()}><img src="img/icon_quitter.png" /></a></span></p>
                        <span className="c-project-description--apropos">
                            <h4>À propos</h4>
                            <hr/>  
                            <p>Mon travail de designer graphique a principalement pour objet la&nbsp;direction&nbsp;artistique et la réalisation de livres, d’identités visuelles, d’affiches, de vidéos, de dessin de caractères et de sites internet.
                            Je&nbsp;mène parallèlement à ma pratique de designer graphique, une pratique quotidienne d’écriture. Je suis ainsi parfois consultée par des studios pour la rédaction et la mise en page de contenus. J’écris aussi régulièrement des articles pour étapes, magazine de design graphique et de culture visuelle.</p>
                            <h4>Mon parcours</h4>
                            <hr/>
                            <ul>
                            <li>Diplôme National d’Expression Plastique à l’École Nationale Supérieure des Arts Décoratifs de Paris — Master concepteur – créateur en design graphique & multimédia</li>
                            <li>Diplôme National d’Art Plastique en Design Graphique et Multimédia à l’Esad de Reims</li>
                            <li>Hypokhâgne et Khâgne — Classes préparatoires littéraires</li>
                            </ul>
                            <h4>J’ai eu l’occasion de travailler pour</h4>
                            <hr/>
                            <p>l’atelier Grand Ensemble, le Bureau des Affaires Graphiques, Hachette, Solar, la Bpi du Centre Pompidou, L’atelier Bastien Morin, Either Studio, étapes magazine.</p>
                            <h4>J’ai eu l’occasion de participer à des workshops avec</h4>
                            <hr />
                            <p>les designers graphiques Johannes Bürgerhausen, Pierre di Sciullo, Na&nbsp;Kim, Benoît Bonnemaison-Fitte, Émilie Rigaud ainsi que le designer d’objet Sébastien Cordoleani, et les artistes Mathieu Chamagne et Kaori Ito.
                            </p>
                            <h4>Me contacter</h4>
                            <hr />
                            <span className="c-project-description__icon"><a href="https://www.instagram.com/claire_mucchielli/"><img src="img/icon_insta.png" /></a></span>
                            <span className="c-project-description__icon"><a href="mailto:mu@clairemucchielli.fr"><img src="img/icon_mail.png" /></a></span>
                            <h4>Site</h4>
                            <hr />
                            <p>Ce site a été conçu et réalisé par Claire Mucchielli & Vincent Varlet.</p>
                            <p>&copy; Aucune des images et textes présentés sur ce site ne peuvent être reproduits sans autorisation préalable de son auteur.</p>                              
                            <p>Politique de confidentialité.</p>
                        </span>                    
                    </section>

                </div>
            </span>
        )
    }


}

export default Apropos;