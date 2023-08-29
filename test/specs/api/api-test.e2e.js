const axios = require('axios');
const assert = require('assert');

const randomString = (Math.random() + 1).toString(36).substring(7);
const apiEndpoint = 'https://gorest.co.in';
const bearerToken = '1f2a6609f32327973637fd8362ee56445f960ec3ae1eac77cd55575d0a6d8a65';
const headers = {Authorization: `Bearer ${bearerToken}`};

it('e2e sequence API',async () => {
  const postData = {
    name: 'Wilson',
    gender: 'male',
    email: randomString+'@gmail.com',
    status: 'active'
  };

  // POST - Create a new user
  const postResponse = await axios.post(apiEndpoint+'/public/v2/users', postData, {headers});
  assert.strictEqual(postResponse.status, 201, 'Status code should be 201');
  assert.strictEqual(postResponse.data.name, postData.name, 'Name should match');
  assert.strictEqual(postResponse.data.email, postData.email, 'Email should match');
  assert.strictEqual(postResponse.data.gender, postData.gender, 'Gender should match');
  assert.strictEqual(postResponse.data.status, postData.status, 'Status should match');
  const id = postResponse.data.id

  // GET - Get user details
  const getResponse = await axios.get(apiEndpoint+`/public/v2/users/${id}`, {headers});
  assert.strictEqual(getResponse.status, 200, 'Status code should be 200');
  assert.strictEqual(getResponse.data.id, id, 'ID should match');
  assert.strictEqual(getResponse.data.name, postData.name, 'Name should match');
  assert.strictEqual(getResponse.data.email, postData.email, 'Email should match');
  assert.strictEqual(getResponse.data.gender, postData.gender, 'Gender should match');
  assert.strictEqual(getResponse.data.status, postData.status, 'Status should match');

  // PUT - Update user details
  const putData = {
    name: 'Shana'
  };
  const putResponse = await axios.put(apiEndpoint+`/public/v2/users/${id}`, putData, {headers});
  assert.strictEqual(putResponse.status, 200, 'Status code should be 200');
  assert.strictEqual(putResponse.data.name, putData.name, 'Name should match');

  // DELETE - Delete user
  const deleteResponse = await axios.delete(apiEndpoint+`/public/v2/users/${id}`, {headers});
  assert.strictEqual(deleteResponse.status, 204, 'Status code should be 204');
});