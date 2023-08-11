module.exports = {
  base: '/come-together/',
  title: 'come-together',
  description: 'something',
  themeConfig: {
    repo: 'https://github.com/seventyfire/come-together',
    repoLabel: 'Go To Github',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Something', link: '/blog/Something.md' }
    ],
    sidebar: [
      ['/', 'Home'],
      ['/blog/Something.md', 'Something']
    ]
  }
}
