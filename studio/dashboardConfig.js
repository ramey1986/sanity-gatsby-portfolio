export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d14b5669f58231763f9ff1d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rtpv7ctt',
                  apiId: '26d96c88-64d4-4538-82a6-f85de5e4b517'
                },
                {
                  buildHookId: '5d14b567e5435d43d0b9a065',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t2pi8a7g',
                  apiId: 'e68427b3-702c-4544-9d1e-a9404445bcd2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ramey1986/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t2pi8a7g.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
