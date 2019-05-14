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
                  buildHookId: '5cda48f047a723cd5185c6bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ucapdjix',
                  apiId: 'c770cb50-f3d3-43e1-9504-62130b4bcaed'
                },
                {
                  buildHookId: '5cda48f03c99b66e644ccb26',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y3hbotb5',
                  apiId: '6746c5de-54fe-4c1a-a63e-68aceb39679d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabrielwebb/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-y3hbotb5.netlify.com', category: 'apps'}
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
