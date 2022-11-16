export default {
  widgets: [
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
                  buildHookId: '637436aa3ccfe4519d8763e1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-13hijbeq',
                  apiId: '8c64061c-b8d4-47dc-9427-6c33a00264a9'
                },
                {
                  buildHookId: '637436ab728892548048eb37',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-atvcnm3j',
                  apiId: '8546dc4d-e55f-4346-95cd-4e529479d7ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pinpointpanda/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-atvcnm3j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
