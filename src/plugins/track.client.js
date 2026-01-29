import mautic from 'mautic-tracking';
mautic.initialize('https://m.h2hsecure.com/mtc.js');

export default (context, inject) => {
  const track = () => {
    mautic.pageView({
      custom: 'options'
    });
  };

  inject('tracking', track);
}