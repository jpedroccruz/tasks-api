const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TaskList CRUD REST API',
      version: '1.0',
      description: 'This is simple API made with express to test knowledges.'
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Dev server'
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          require: ['title', 'description', 'status', 'created_at'],
          properties: {
            title: {
              type: 'string',
              description: 'The title of the Task'
            },
            description: {
              type: 'string',
              description: 'The description of the Task'
            },
            status: {
              type: 'string',
              description: 'The status of the Task'
            },
            created_at: {
              type: 'string',
              description: 'The creation date of the Task (DD/MM/YY)'
            }
          }
        }
      },
      responses: {
        400: {
          description: 'Missing credentials - included in body request',
          contents: 'application/json'
        },
      }
    }
  },
  apis: ['./src/routes.ts']
}

export default options