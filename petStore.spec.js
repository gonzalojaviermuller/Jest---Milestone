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
    expect(response.statusCode).toBe(200);
    expect(response.body?.name).toEqual(expect.stringContaining("Shark"));
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    petID = response.body?.id;
  });

  test("Should Get posted pet", async () => {
    const response = await request("https://petstore.swagger.io/v2").get(
      `/pet/${petID}`
    );
    expect(response.statusCode).toBe(200);
    expect(response.body?.id).toEqual(petID);
  });
});
