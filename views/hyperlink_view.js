const PubSub = require('../src/helpers/pub_sub.js');


const HyperlinkView = function() {

};

HyperlinkView.prototype.bindEvents = function () {
  const aLink = document.querySelector('.planets-menu');
  aLink.addEventListener('click', (event) => {
    event.preventDefault();
    const inputClick = event.target.id;
    // console.log('input click:', inputClick);
    PubSub.publish('HyperlinkView:click-submitted', inputClick);
});
};


module.exports = HyperlinkView;
