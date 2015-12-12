module.exports =
{ extends: [ 'standard' ]
, globals:
  { describe: true
  , it: true
  , before: true
  , beforeEach: true
  , after: true
  , afterEach: true
  }
, rules:
  { camelcase: [ 2, { 'properties': 'always' } ]
  , 'comma-style': [ 2, 'first' ]
  , complexity: [ 2, 8 ]
  , curly: [ 2, 'multi-line' ]
  , indent: 0
  , 'max-len':
    [ 2
    , 120
    , 2
    , { ignoreComments: false
      , ignoreUrls: true
      , ignorePattern: '^\\s*(var|,)\\s.+=\\s*(?:new RegExp|require|\/)(?:\\s*\\()?'
      }
    ]
  , 'max-nested-callbacks': [ 2, 10 ]
  , 'max-params': [ 2, 7 ]
  , 'max-statements': [ 2, 25 ]
  , 'newline-after-var': 2
  , 'no-unused-vars': [ 2, 'all' ]
  , 'one-var': 0
  , 'padded-blocks': 0
  , 'space-before-function-paren': [ 2, { anonymous: 'always', named: 'never' } ]
  }
}
