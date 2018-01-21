import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import promise from 'redux-promise';

import reducers from './reducers';
import ProjectList from './containers/ProjectList';
import ProjectDetail from './containers/ProjectDetail';
import ProjectSlider from './containers/ProjectSlider';
import Logo from './components/logo';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <section>
        <Switch>
          <Redirect exact path="/" to="/projets/0"/>
          <Route path="/projets/:id/:pid" component={ProjectDetail} />
          <Route path="/projets/:id" component={ProjectSlider} />
          <Route path="/list" component={ProjectList} />
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  , document.querySelector('.container')
);

require("../style/style.scss");
require('../assets/img/cursor-left.png');
require('../assets/img/cursor-right.png');

require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_1.jpg');
require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_2.jpg');
require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_3.jpg');
require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_4.jpg');
require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_5.jpg');
require('../assets/img/01_TON_DEDANS_DEF_WEB/DEVANT_6.jpg');

require('../assets/img/02_MARIE_MA_DIT_DEF_WEB/MARIE_1.jpg');
require('../assets/img/02_MARIE_MA_DIT_DEF_WEB/MARIE_2.jpg');

require('../assets/img/03_ANVP_DEF_WEB/ANVP_1.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_2.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_3.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_4.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_5.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_6.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_7.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_8.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_9.jpg');
require('../assets/img/03_ANVP_DEF_WEB/ANVP_10.jpg');

require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_1.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_2.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_3.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_4.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_5.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_6.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_7.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_8.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_9.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_10.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_11.jpg');
require('../assets/img/04_CONVERSATION_DEF_WEB/CONV_12.jpg');

require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_1.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_2.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_3.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_4.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_5.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_6.jpg');
require('../assets/img/05_BOIS_MOI_DEF_WEB/BOIS_7.jpg');

require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_1.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_2.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_3.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_4.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_5.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_6.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_7.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_8.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_9.jpg');
require('../assets/img/06_GRANDPARRAINS_DEF_WEB/GP_10.jpg');

require('../assets/img/07_DESHERBES_DEF_WEB/DES_1.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_2.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_3.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_4.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_5.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_6.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_7.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_8.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_9.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_10.jpg');
require('../assets/img/07_DESHERBES_DEF_WEB/DES_11.jpg');

require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_1.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_2.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_3.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_4.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_5.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_6.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_7.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_8.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_9.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_10.jpg');
require('../assets/img/08_AVENTURIERS_DEF_TYPO_WEB/AVENTURIERS_11.jpg');

require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_1.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_2.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_3.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_4.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_5.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_6.jpg');
require('../assets/img/09-BARBE_BLEUE_DEF_WEB/BB_7.jpg');

require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_1.jpg');
require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_2.jpg');
require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_3.jpg');
require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_4.jpg');
require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_5.jpg');
require('../assets/img/10_AVENTURIERS_DEF_AFFICHE_WEB/AVENTURIER_6.jpg');

require('../assets/img/11_BRETECHER_DEF_WEB/BRET_1.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_2.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_3.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_4.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_5.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_6.jpg');
require('../assets/img/11_BRETECHER_DEF_WEB/BRET_7.jpg');

require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_1.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_2.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_3.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_4.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_5.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_6.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_7.jpg');
require('../assets/img/12_CARNEVALI_DEF_WEB/CARNE_8.jpg');

require('../assets/img/13_BUNUEL_DEF_WEB/BUNUEL_1.jpg');
require('../assets/img/13_BUNUEL_DEF_WEB/BUNUEL_2.jpg');
require('../assets/img/13_BUNUEL_DEF_WEB/BUNUEL_3.jpg');
require('../assets/img/13_BUNUEL_DEF_WEB/BUNUEL_4.jpg');

require('../assets/img/14_SITE BASTIEN MORIN_DEF_WEB/BUNUEL_1.jpg');
require('../assets/img/14_SITE BASTIEN MORIN_DEF_WEB/BUNUEL_2.jpg');

require('../assets/img/15_CARTER_DEF_WEB/CARTER_1.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_2.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_3.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_4.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_5.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_6.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_7.jpg');
require('../assets/img/15_CARTER_DEF_WEB/CARTER_8.jpg');

require('../assets/img/16_CHEROKEE_DEF_WEB/cherokee_1.jpg');
require('../assets/img/16_CHEROKEE_DEF_WEB/cherokee_2.jpg');

require('../assets/img/17_EDITHCLAUDE_DEF_WEB/E&C_1.jpg');
require('../assets/img/17_EDITHCLAUDE_DEF_WEB/E&C_2.jpg');
require('../assets/img/17_EDITHCLAUDE_DEF_WEB/E&C_3.jpg');

require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_1.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_2.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_3.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_4.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_5.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_6.jpg');
require('../assets/img/18_ETAPEARTICLE_DEF_WEB/GENY_7.jpg');

require('../assets/img/19_NEUE_JO_DEF_WEB/JO_1.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_2.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_3.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_4.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_5.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_6.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_7.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_8.jpg');
require('../assets/img/19_NEUE_JO_DEF_WEB/JO_9.jpg');

require('../assets/img/20_LAMENTIN_DEF_WEB/LAMENTIN_1.jpg');
require('../assets/img/20_LAMENTIN_DEF_WEB/LAMENTIN_2.jpg');

require('../assets/img/21_RUNNING_DEF_WEB/RUN_1.jpg');
require('../assets/img/21_RUNNING_DEF_WEB/RUN_2.jpg');
require('../assets/img/21_RUNNING_DEF_WEB/RUN_3.jpg');
require('../assets/img/21_RUNNING_DEF_WEB/RUN_4.jpg');
require('../assets/img/21_RUNNING_DEF_WEB/RUN_5.jpg');

require('../assets/img/22_NOSSA_DEF_WEB/Nossa_1.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_2.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_3.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_4.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_5.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_6.jpg');
require('../assets/img/22_NOSSA_DEF_WEB/Nossa_7.jpg');

require('../assets/img/23_PANNEAU_DEF_WEB/PANNEAU_1.jpg');
require('../assets/img/23_PANNEAU_DEF_WEB/PANNEAU_2.jpg');
require('../assets/img/23_PANNEAU_DEF_WEB/PANNEAU_3.jpg');
require('../assets/img/23_PANNEAU_DEF_WEB/PANNEAU_4.jpg');
require('../assets/img/23_PANNEAU_DEF_WEB/PANNEAU_5.jpg');

require('../assets/img/24_TREMBLAY_DEF_WEB/Tremblay_1.jpg');
require('../assets/img/24_TREMBLAY_DEF_WEB/Tremblay_2.jpg');
require('../assets/img/24_TREMBLAY_DEF_WEB/Tremblay_3.jpg');

require('../assets/img/25_BASTIEN_MORIN_WEB/DA_1.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_2.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_3.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_4.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_5.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_6.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_7.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_8.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_9.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_10.jpg');
require('../assets/img/25_BASTIEN_MORIN_WEB/DA_11.jpg');
