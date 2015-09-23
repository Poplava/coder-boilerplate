module.exports = {
  less: {
    src: 'src/css/*.less',
    dest: '.',
    less: {
      relativeUrls: true,
      pretty: true
    },
    autoprefixer: {
      browsers: ['last 2 versions'],
      cascade: false
    }
  },

  jade: {
    src: 'src/html/*.jade',
    dest: '.',
    jade: {
      pretty: true
    }
  }
};
