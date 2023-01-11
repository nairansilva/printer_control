
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/turmas": {
        "post": {
          "operationId": "TurmasController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateTurmaDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateTurmaDto"
                  }
                }
              }
            },
            "503": {
              "description": "Serviço Indisponível"
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "get": {
          "operationId": "TurmasController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/CreateTurmaDto"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/turmas/carga": {
        "post": {
          "operationId": "TurmasController_createMany",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/turmas/{id}": {
        "get": {
          "operationId": "TurmasController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateTurmaDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "patch": {
          "operationId": "TurmasController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateTurmaDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateTurmaDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "TurmasController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/turmas/carga/all": {
        "delete": {
          "operationId": "TurmasController_deleteAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "Turmas"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/solicitacao": {
        "post": {
          "operationId": "SolicitacaoController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSolicitacaoDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Solicitacao"
          ]
        },
        "get": {
          "operationId": "SolicitacaoController_findAll",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Solicitacao"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/solicitacao/{id}": {
        "get": {
          "operationId": "SolicitacaoController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Solicitacao"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "patch": {
          "operationId": "SolicitacaoController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateSolicitacaoDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Solicitacao"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "SolicitacaoController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Solicitacao"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/users": {
        "post": {
          "operationId": "UsersController_create",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateUserDto"
                  }
                }
              }
            }
          },
          "tags": [
            "Usuarios"
          ]
        }
      },
      "/users/login": {
        "post": {
          "operationId": "UsersController_singin",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Usuarios"
          ]
        }
      }
    },
    "info": {
      "title": "Controle de Impressão",
      "description": "Ferramenta para Controle de Impressões",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "CreateTurmaDto": {
          "type": "object",
          "properties": {
            "idTurmaDisc": {
              "type": "number",
              "description": "Id da disciplina da Turma"
            },
            "codTurma": {
              "type": "string",
              "description": "Código da Turma"
            },
            "codDisc": {
              "type": "string",
              "description": "Códico da Disciplina"
            },
            "disciplina": {
              "type": "string",
              "description": "Nome da Disciplina"
            },
            "email_professor": {
              "type": "string",
              "description": "Email do Professor"
            },
            "professor": {
              "type": "string",
              "description": "Nome do Professor"
            },
            "num_Alunos": {
              "type": "number",
              "description": "Número de Alunos"
            },
            "email_coordenador": {
              "type": "string",
              "description": "Email do Coordenador"
            },
            "coordenador": {
              "type": "string",
              "description": "Nome do Coordenador"
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "idTurmaDisc",
            "codTurma",
            "codDisc",
            "disciplina",
            "email_professor",
            "professor",
            "num_Alunos",
            "email_coordenador",
            "coordenador",
            "id"
          ]
        },
        "UpdateTurmaDto": {
          "type": "object",
          "properties": {
            "idTurmaDisc": {
              "type": "number",
              "description": "Id da disciplina da Turma"
            },
            "codTurma": {
              "type": "string",
              "description": "Código da Turma"
            },
            "codDisc": {
              "type": "string",
              "description": "Códico da Disciplina"
            },
            "disciplina": {
              "type": "string",
              "description": "Nome da Disciplina"
            },
            "email_professor": {
              "type": "string",
              "description": "Email do Professor"
            },
            "professor": {
              "type": "string",
              "description": "Nome do Professor"
            },
            "num_Alunos": {
              "type": "number",
              "description": "Número de Alunos"
            },
            "email_coordenador": {
              "type": "string",
              "description": "Email do Coordenador"
            },
            "coordenador": {
              "type": "string",
              "description": "Nome do Coordenador"
            },
            "id": {
              "type": "string"
            }
          }
        },
        "CreateSolicitacaoDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "email_solicitante": {
              "type": "string"
            },
            "descricao": {
              "type": "string"
            },
            "idTurmaDisc": {
              "type": "number"
            },
            "email_coordenador": {
              "type": "string"
            },
            "codTurma": {
              "type": "string"
            },
            "status": {
              "type": "number"
            }
          },
          "required": [
            "id",
            "email_solicitante",
            "descricao",
            "idTurmaDisc",
            "email_coordenador",
            "codTurma",
            "status"
          ]
        },
        "UpdateSolicitacaoDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "email_solicitante": {
              "type": "string"
            },
            "descricao": {
              "type": "string"
            },
            "idTurmaDisc": {
              "type": "number"
            },
            "email_coordenador": {
              "type": "string"
            },
            "codTurma": {
              "type": "string"
            },
            "status": {
              "type": "number"
            }
          }
        },
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            },
            "rule": {
              "type": "number"
            },
            "name": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "email": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "createdAt",
            "updatedAt",
            "rule",
            "name",
            "password",
            "email"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
