module.exports = {
  template: {
    favicon: 'public/gstudio-icon.png'
  },
  sections: [
    {
      name: "Introduction",
      content: "docs/intro.md"
    },
    {
      name: 'Components',
      components: 'src/components/**/*.js',
      content: 'docs/componentsIntro.md'
    }
  ],
};