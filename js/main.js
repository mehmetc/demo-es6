import Primo from './primo-explore-dom/js/primo'
import Helper from './primo-explore-dom/js/primo/explore/helper'
import {pnxXmlConfig} from './prmBriefResultContainerAfter/pnxXml'


window.Primo = Primo;

window.setTimeout(function() {
  if (Primo.isDebugEnabled()) {
    let uiURL = 'https://cdn.rawgit.com/mehmetc/primo-explore-dom-ui/fc0868df/js/custom.js';

    Helper.loadScript(uiURL).then(() => {
      console.log('Injecting UI');
      Primo.explore.ui.toggle();
    });
  }
}, 2000);

let app = angular.module('viewCustom',[]);
if (app){
    app.component('prmBriefResultContainerAfter', pnxXmlConfig);
}
