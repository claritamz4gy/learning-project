const getRandomTsCode = () => {
  const types = ['number', 'string', 'boolean', 'object'];
  const typeIndex = Math.floor(Math.random() * types.length);
  const type = types[typeIndex];
  let code = '';
  switch (type) {
    case 'number':
      code = `const getRandomNumber = () => Math.floor(Math.random() * 10);`;
      break;
    case 'string':
      code = `const getRandomString = () => Math.random().toString();`
      break;
    case 'boolean':
      code = `const getRandomBoolean = () => Math.random() > 0.5;`;
      break;
    case 'object':
      code = `const getRandomObject = () => { return { random: Math.random() }; }`
      break;
  }
  return code;
};
