import { petObject } from "../support";
const request = require("supertest");

export default async (expectedStatus, params) => {
  const baseUrl = "https://petstore.swagger.io/v2";
  const endpoint = "/pet";
  const requestBody = petObject(params.id, params.name);
  const res = await request(baseUrl)
    .post(endpoint)
    .send(requestBody)
    .expect(expectedStatus);

  return {
    request: {
      body: requestBody,
    },
    response: {
      body: res.text,
    },
  };
};
