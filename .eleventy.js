module.exports = function(eleventyConfig) {

  eleventyConfig.setNunjucksEnvironmentOptions({
    throwOnUndefined: true,
  });


  return {
    dir: {
      input: 'src',
      output: 'dist',
      pathPrefix: "/skna/",
      data: '../../data/processed/',
    },
  };
};
