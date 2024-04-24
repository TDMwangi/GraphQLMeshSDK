"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const schemaAST = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "SchemaDefinition",
            "operationTypes": [
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "query",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Query"
                        }
                    }
                },
                {
                    "kind": "OperationTypeDefinition",
                    "operation": "mutation",
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Mutation"
                        }
                    }
                }
            ],
            "directives": []
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "enum"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "value"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "ENUM_VALUE"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "globalOptions"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sourceName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "endpoint"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "operationHeaders"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryStringOptions"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryParams"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "OBJECT"
                }
            ]
        },
        {
            "kind": "DirectiveDefinition",
            "name": {
                "kind": "Name",
                "value": "httpOperation"
            },
            "arguments": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "path"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "operationSpecificHeaders"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "httpMethod"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "HTTPMethod"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "isBinary"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "requestBaseBody"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryParamArgMap"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "queryStringOptionsByParam"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ObjMap"
                        }
                    },
                    "directives": []
                }
            ],
            "repeatable": false,
            "locations": [
                {
                    "kind": "Name",
                    "value": "FIELD_DEFINITION"
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Query"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Multiple status values can be provided with comma separated strings",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "findPetsByStatus"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Status values that need to be considered for filter",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "status"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "ListType",
                                    "type": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "queryInput_findPetsByStatus_status_items"
                                        }
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Pet"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/findByStatus"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "queryParamArgMap"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"status\":\"status\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "findPetsByTags"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Tags to filter by",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "tags"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "ListType",
                                    "type": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "String"
                                        }
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Pet"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "deprecated"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "reason"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "deprecated"
                                    }
                                }
                            ]
                        },
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/findByTags"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "queryParamArgMap"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"tags\":\"tags\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Returns a single pet",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getPetById"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "ID of pet to return",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "petId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Pet"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/{args.petId}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getOrderById"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "ID of pet that needs to be fetched",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "orderId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Order"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/store/order/{args.orderId}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Returns a map of status codes to quantities",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getInventory"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/store/inventory"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Get user by user name",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "getUserByName"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The name that needs to be fetched. Use user1 for testing.",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "User"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/{args.username}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Logs user into the system",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "loginUser"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The user name for login",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The password for login in clear text",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "password"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/login"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "queryParamArgMap"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"username\":\"username\",\"password\":\"password\"}"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Logs out current logged in user session",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "logoutUser"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/logout"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "GET"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "interfaces": [],
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "globalOptions"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "sourceName"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "PetStoreSwaggerAPI"
                            }
                        },
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "endpoint"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "https://petstore.swagger.io/v2"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Pet object that needs to be added to the store",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Pet"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "category"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Category"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "photoUrls"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "tags"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Tag"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "mutationInput_addPet_input_status"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "The `BigInt` scalar type represents non-fractional signed whole numeric values.",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "BigInt"
            },
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Category"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Tag"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "pet status in the store",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "mutationInput_addPet_input_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "available"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "pending"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sold"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "queryInput_findPetsByStatus_status_items"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "available"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "pending"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "sold"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "order placed for purchasing the pet",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Order"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "petId"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shipDate"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DateTime"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "mutation_placeOrder_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "complete"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "DateTime"
            },
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Order Status",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "mutation_placeOrder_status"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "placed"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "approved"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "delivered"
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "JSON"
            },
            "directives": [
                {
                    "kind": "Directive",
                    "name": {
                        "kind": "Name",
                        "value": "specifiedBy"
                    },
                    "arguments": [
                        {
                            "kind": "Argument",
                            "name": {
                                "kind": "Name",
                                "value": "url"
                            },
                            "value": {
                                "kind": "StringValue",
                                "value": "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "kind": "ObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Updated user object",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "User"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "username"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "firstName"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastName"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "email"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "password"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "phone"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User Status",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "userStatus"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Mutation"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "uploads an image",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "uploadFile"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "ID of pet to update",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "petId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "ApiResponse"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/{args.petId}/uploadImage"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"multipart/form-data\",\"Accept\":\"application/json\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Add a new pet to the store",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "addPet"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Pet_Input"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json, application/xml\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Update an existing pet",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "updatePet"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Pet_Input"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json, application/xml\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "PUT"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Updates a pet in the store with form data",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "updatePetWithForm"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "ID of pet that needs to be updated",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "petId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/{args.petId}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/x-www-form-urlencoded\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Deletes a pet",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "deletePet"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "api_key"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "Pet id to delete",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "petId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/pet/{args.petId}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"api_key\":\"{args.api_key}\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "DELETE"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Place an order for a pet",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "placeOrder"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Order_Input"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Order"
                            }
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/store/order"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "deleteOrder"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "ID of the order that needs to be deleted",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "orderId"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "BigInt"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/store/order/{args.orderId}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "DELETE"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Creates list of users with given input array",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "createUsersWithArrayInput"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "List of user object",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "ListType",
                                    "type": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "User_Input"
                                        }
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/createWithArray"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "Creates list of users with given input array",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "createUsersWithListInput"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "List of user object",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "ListType",
                                    "type": {
                                        "kind": "NamedType",
                                        "name": {
                                            "kind": "Name",
                                            "value": "User_Input"
                                        }
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/createWithList"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "This can only be done by the logged in user.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "updateUser"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "name that need to be updated",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "User_Input"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/{args.username}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "PUT"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "This can only be done by the logged in user.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "deleteUser"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "description": {
                                "kind": "StringValue",
                                "value": "The name that needs to be deleted",
                                "block": true
                            },
                            "name": {
                                "kind": "Name",
                                "value": "username"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user/{args.username}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "DELETE"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "kind": "FieldDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "This can only be done by the logged in user.",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "createUser"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "input"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "User_Input"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "JSON"
                        }
                    },
                    "directives": [
                        {
                            "kind": "Directive",
                            "name": {
                                "kind": "Name",
                                "value": "httpOperation"
                            },
                            "arguments": [
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "path"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "/user"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "operationSpecificHeaders"
                                    },
                                    "value": {
                                        "kind": "StringValue",
                                        "value": "{\"Content-Type\":\"application/json\",\"Accept\":\"application/json, application/xml\"}"
                                    }
                                },
                                {
                                    "kind": "Argument",
                                    "name": {
                                        "kind": "Name",
                                        "value": "httpMethod"
                                    },
                                    "value": {
                                        "kind": "EnumValue",
                                        "value": "POST"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ApiResponse"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "type"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "message"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Pet object that needs to be added to the store",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Pet_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "category"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Category_Input"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "photoUrls"
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "String"
                                }
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "tags"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Tag_Input"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "mutationInput_addPet_input_status"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Category_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Tag_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "name"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "order placed for purchasing the pet",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "Order_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "petId"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "quantity"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "shipDate"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "DateTime"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "status"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "mutation_placeOrder_status"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "complete"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Boolean"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "description": {
                "kind": "StringValue",
                "value": "Updated user object",
                "block": true
            },
            "name": {
                "kind": "Name",
                "value": "User_Input"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "id"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "BigInt"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "username"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "firstName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "lastName"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "email"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "password"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "phone"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "description": {
                        "kind": "StringValue",
                        "value": "User Status",
                        "block": true
                    },
                    "name": {
                        "kind": "Name",
                        "value": "userStatus"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "Int"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ScalarTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ObjMap"
            },
            "directives": []
        },
        {
            "kind": "EnumTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "HTTPMethod"
            },
            "values": [
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "GET"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "HEAD"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "POST"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PUT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "DELETE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "CONNECT"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "OPTIONS"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "TRACE"
                    },
                    "directives": []
                },
                {
                    "kind": "EnumValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "PATCH"
                    },
                    "directives": []
                }
            ],
            "directives": []
        }
    ]
};
exports.default = (0, graphql_1.buildASTSchema)(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true
});
//# sourceMappingURL=schemaWithAnnotations.js.map