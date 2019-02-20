const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const { parse } = require('../index');

test('Test', async () => {
  const result = parse(`<div>
    <h1>Hello World</h1>

  </div>`); 
  eval(result);
});

