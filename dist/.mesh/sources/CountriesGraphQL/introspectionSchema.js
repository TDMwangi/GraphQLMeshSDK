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
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Continent"
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
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "countries"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Country"
                                    }
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
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "ContinentFilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringQueryOperatorInput"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Country"
            },
            "fields": [
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "awsRegion"
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
                        "value": "capital"
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
                        "value": "code"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "continent"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Continent"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "currencies"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
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
                        "value": "currency"
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
                        "value": "emoji"
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
                        "value": "emojiU"
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
                        "value": "languages"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Language"
                                    }
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
                        "value": "name"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "lang"
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
                        "value": "native"
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
                        "value": "phone"
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
                        "value": "phones"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
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
                        "value": "states"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "State"
                                    }
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
                        "value": "subdivisions"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Subdivision"
                                    }
                                }
                            }
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
            "name": {
                "kind": "Name",
                "value": "CountryFilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringQueryOperatorInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "continent"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringQueryOperatorInput"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "currency"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringQueryOperatorInput"
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
                            "value": "StringQueryOperatorInput"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
        },
        {
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Language"
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
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
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
                        "value": "native"
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
                        "value": "rtl"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Boolean"
                            }
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
            "name": {
                "kind": "Name",
                "value": "LanguageFilterInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "code"
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "StringQueryOperatorInput"
                        }
                    },
                    "directives": []
                }
            ],
            "directives": []
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
                    "name": {
                        "kind": "Name",
                        "value": "continent"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
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
                            "value": "Continent"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "continents"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "ContinentFilterInput"
                                }
                            },
                            "defaultValue": {
                                "kind": "ObjectValue",
                                "fields": []
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Continent"
                                    }
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
                        "value": "countries"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "CountryFilterInput"
                                }
                            },
                            "defaultValue": {
                                "kind": "ObjectValue",
                                "fields": []
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Country"
                                    }
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
                        "value": "country"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
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
                            "value": "Country"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "language"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "code"
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ID"
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
                            "value": "Language"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "languages"
                    },
                    "arguments": [
                        {
                            "kind": "InputValueDefinition",
                            "name": {
                                "kind": "Name",
                                "value": "filter"
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "LanguageFilterInput"
                                }
                            },
                            "defaultValue": {
                                "kind": "ObjectValue",
                                "fields": []
                            },
                            "directives": []
                        }
                    ],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "ListType",
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "Language"
                                    }
                                }
                            }
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
                "value": "State"
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
                            "value": "String"
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "country"
                    },
                    "arguments": [],
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Country"
                            }
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
                }
            ],
            "interfaces": [],
            "directives": []
        },
        {
            "kind": "InputObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "StringQueryOperatorInput"
            },
            "fields": [
                {
                    "kind": "InputValueDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "eq"
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
                        "value": "in"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
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
                        "value": "ne"
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
                        "value": "nin"
                    },
                    "type": {
                        "kind": "ListType",
                        "type": {
                            "kind": "NonNullType",
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
                        "value": "regex"
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
            "kind": "ObjectTypeDefinition",
            "name": {
                "kind": "Name",
                "value": "Subdivision"
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
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "ID"
                            }
                        }
                    },
                    "directives": []
                },
                {
                    "kind": "FieldDefinition",
                    "name": {
                        "kind": "Name",
                        "value": "emoji"
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
                }
            ],
            "interfaces": [],
            "directives": []
        }
    ]
};
exports.default = (0, graphql_1.buildASTSchema)(schemaAST, {
    assumeValid: true,
    assumeValidSDL: true
});
//# sourceMappingURL=introspectionSchema.js.map