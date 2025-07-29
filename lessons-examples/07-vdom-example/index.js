/*
<div>
  <img src="https://coolimage.com/image.png">
  <a href="https://coolvideo.com/video">
    <h3>Cool Video</h3>
    <p>A very cool video</p>
  </a>
</div>
*/

const prevVideo = {
  tag: 'div',
  children: [{
    tag: 'img',
    attributes: {
      src: 'https://coolimage.com/image.png'
    }
  }, {
    tag: 'a',
    attributes: {
      href: 'https://coolvideo.com/video'
    },
    children: [{
      tag: 'h3',
      children: ['Cool Video']
    }, {
      tag: 'p',
      children: ['A very cool video']
    }]
  }]
};

const nextVideo = {
  tag: 'div',
  children: [{
    tag: 'img',
    attributes: {
      src: 'https://coolimage.com/image2.png'
    }
  }, {
    tag: 'a',
    attributes: {
      href: 'https://coolvideo.com/vide2'
    },
    children: [{
      tag: 'h3',
      children: ['Another Cool Video']
    }, {
      tag: 'p',
      children: ['Another very cool video']
    }]
  }]
};