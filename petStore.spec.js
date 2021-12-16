const request = require("supertest");

describe("Post /pet, Get /Pet/id", () => {
  let petID;

  test("Should Post new pet", async () => {
    const response = await request("https://petstore.swagger.io/v2")
      .post("/pet")
      .send({
        id: 2,
        name: "Shark",
      });

    console.log(response.headers);
    console.log(response.body);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toEqual(expect.stringContaining("Shark"));
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    petID = response.body.id;

    console.log(petID);
  });

  test("Should Get posted pet", async () => {
    const response = await request("https://petstore.swagger.io/v2").get(
      `/pet/${petID}`
    );

    console.log(response.body.id);

    expect(response.statusCode).toBe(200);
    expect(response.body.id).toEqual(petID);
  });
});
