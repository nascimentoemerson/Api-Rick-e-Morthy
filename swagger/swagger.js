export const swaggerDocs = {
  openapi: "3.0.0",
  info: {
    title: "rick-and-morty-api",
    description: "Rick and Morty Api",
    termsOfService: "",
    contact: {
      email: "contatovemarketing@gmail.com.br",
    },
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Desenvolvendo e testando api",
    },

    {
      url: "https://heroku-api-rick.herokuapp.com/",
      description: "Production API",
    },
  ],
  paths: {
    "/users/create": {
      post: {
        summary: "Creates new user",
        description: "Route responsable for creating a new user",
        tags: ["User"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              examples: {
                Users: {
                  value: {
                    name: "Emerson",
                    username: "Nascimento",
                    email: "emersonmaza@gmail.com",
                    password: "senhafacil@",
                    photo:
                      "https://avatars.githubusercontent.com/u/106124397?v=4",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/users": {
      get: {
        summary: "Show the users",
        description: "Route responsable for showing the users",
        tags: ["User"],
        security: [
          {
            token: [],
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
          404: {
            description: "Not Found",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Login in Rick and Morty API",
        description: "Route responsable for the login",
        tags: ["Auth"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
              examples: {
                User: {
                  value: {
                    email: "emersonmaza@gmail.com.br",
                    password: "12345",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/characters/create-character": {
      post: {
        summary: "Creates a new character",
        description: "Route responsable for creating a new character",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Character",
              },
              examples: {
                Tweet: {
                  value: {
                    userId: "3137b607-b803-46df-bb16-6772f88b91d8",
                    name: "Chicao",
                    image: "http://chicao.image.com",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
          401: {
            description: "Unauthorized",
          },
        },
      },
    },
    "/characters/all-characters": {
      get: {
        summary: "Show the characters",
        description: "Route responsable for showing the characters",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            in: "query",
            name: "limit",
            type: "string",
          },
          {
            in: "query",
            name: "offset",
            type: "string",
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Character",
                  },
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/find-character/{id}": {
      get: {
        summary: "Search a character by id",
        description: "Route responsable for searching a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for search",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/update-character/{id}": {
      patch: {
        summary: "Edit character by id",
        description: "Route responsable for editing a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for search",
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Character",
              },
              examples: {
                Character: {
                  value: {
                    name: "Rassum Git",
                    email: "rassum@gmail.com",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          400: {
            description: "Bad Request",
          },
        },
      },
    },
    "/characters/delete-character/{id}": {
      delete: {
        summary: "Delete a character by id",
        description: "Route responsable for deleting a character by id",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            name: "id",
            in: "path",
            description: "Character id for delete",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
    "/characters/search": {
      get: {
        summary: "Search character by name",
        description: "Route responsable for searching a character by name",
        tags: ["Character"],
        security: [
          {
            token: [],
          },
        ],
        parameters: [
          {
            in: "query",
            name: "name",
            type: "string",
            required: true,
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  $ref: "#/components/schemas/Character",
                },
              },
            },
          },
          401: {
            description: "Unauthorized",
          },
          404: {
            description: "Not Found",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
          image: {
            type: "string",
          },
          characters: {
            type: "string",
          },
        },
      },
      Character: {
        type: "object",
        properties: {
          id: {
            type: "string",
          },
          name: {
            type: "string",
          },
          image: {
            type: "string",
          },
          userId: {
            type: "string",
          },
        },
      },
    },
    securitySchemes: {
      token: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: {
    token: [],
  },
};
