const request = require("supertest");

export default async (expectedStatus = 200, params = {id: 2}) => {
  const baseUrl = "https://petstore.swagger.io/v2";
  const endpoint = `/pet/${params.id}`;

  const res = await request(baseUrl).get(endpoint).expect(expectedStatus);

  return {
    response: {
      body: res.body,
    }
  };
};
