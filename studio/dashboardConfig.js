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
                  buildHookId: '624bf623a951045dd46c9b5e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cwqzccrb',
                  apiId: '04e90742-794d-4726-8b2a-936e6c9709f8'
                },
                {
                  buildHookId: '624bf6237f6f8e7a901f7a71',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1casfctf',
                  apiId: 'e66ad757-8176-4c0c-beb2-b95c096d7040'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Joshi-pixal/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1casfctf.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
