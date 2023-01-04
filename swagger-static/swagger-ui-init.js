
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
            "turmas"
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
            "turmas"
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
            "turmas"
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
            "turmas"
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
            "turmas"
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
            "turmas"
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
            "turmas"
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
            "solicitacao"
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
            "solicitacao"
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
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "solicitacao"
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
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "solicitacao"
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
                    "type": "string"
                  }
                }
              }
            }
          },
          "tags": [
            "solicitacao"
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
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "usuarios"
          ]
        },
        "get": {
          "operationId": "UsersController_findAll",
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
            "usuarios"
          ]
        }
      },
      "/users/login": {
        "post": {
          "operationId": "UsersController_singin",
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
              "description": ""
            }
          },
          "tags": [
            "usuarios"
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
            "professor": {
              "type": "string",
              "description": "Nome do Professor"
            },
            "num_Alunos": {
              "type": "number",
              "description": "Número de Alunos"
            },
            "coordenador": {
              "type": "string",
              "description": "Nome do Coordenador"
            }
          },
          "required": [
            "idTurmaDisc",
            "codTurma",
            "codDisc",
            "disciplina",
            "professor",
            "num_Alunos",
            "coordenador"
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
            "professor": {
              "type": "string",
              "description": "Nome do Professor"
            },
            "num_Alunos": {
              "type": "number",
              "description": "Número de Alunos"
            },
            "coordenador": {
              "type": "string",
              "description": "Nome do Coordenador"
            }
          }
        },
        "CreateSolicitacaoDto": {
          "type": "object",
          "properties": {
            "solicitante": {
              "type": "string",
              "description": "Nome do Solicitante"
            },
            "solicitante_id": {
              "type": "string"
            },
            "aprovador": {
              "type": "string"
            },
            "status": {
              "type": "number"
            },
            "finalizado": {
              "type": "boolean"
            },
            "coordenador": {
              "type": "string"
            },
            "coordenador_id": {
              "type": "string"
            }
          },
          "required": [
            "solicitante",
            "solicitante_id",
            "aprovador",
            "status",
            "finalizado",
            "coordenador",
            "coordenador_id"
          ]
        },
        "UpdateSolicitacaoDto": {
          "type": "object",
          "properties": {
            "solicitante": {
              "type": "string",
              "description": "Nome do Solicitante"
            },
            "solicitante_id": {
              "type": "string"
            },
            "aprovador": {
              "type": "string"
            },
            "status": {
              "type": "number"
            },
            "finalizado": {
              "type": "boolean"
            },
            "coordenador": {
              "type": "string"
            },
            "coordenador_id": {
              "type": "string"
            }
          }
        },
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "senha": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "senha"
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
