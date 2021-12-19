import postPet from "./flow/postPet";

describe("Post /pet, Get /Pet/id", () => {
  let petID;

  test("Should Post new pet", async () => {
    const postPetRes = await postPet(200, {id: 2, name: "Sharky"});
    expect(postPetRes.body?.name).toEqual("Sharky");
    expect(postPetRes.headers["content-type"]).toEqual("json");

    petID = response.body?.id;
  });

  // // test("Should Get posted pet", async () => {
  // //   const response = await request("https://petstore.swagger.io/v2").get(
  // //     `/pet/${petID}`
  // //   );
  // //   expect(response.statusCode).toBe(200);
  // //   expect(response.body?.id).toEqual(petID);
  // });
});
