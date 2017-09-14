import pnxXmlHTML from './pnxXml.html'

class PnxXmlController {
  constructor(){
    console.log('---->starting');
  }

  get recordid() {
    return this.parentCtrl.item.pnx.control.recordid[0];
  }
}

export let pnxXmlConfig = {
  bindings: {parentCtrl:'<'},
  controller: PnxXmlController,
  template: pnxXmlHTML
}
