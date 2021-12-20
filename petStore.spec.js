import postPet from "./modules/postPet";
import getPet from "./modules/getPet";

describe("Post /pet, Get /Pet/id", () => {
  let petID;
  let petName;

  test("Should Post new pet", async () => {
    const postPetRes = await postPet(200, {id: 2, name: "Sharky"});

    expect(postPetRes.response?.body?.name).toEqual("Sharky");
    expect(postPetRes.response?.headers["content-type"]).toEqual(
      "application/json"
    );

    petID = postPetRes.response?.body?.id;
    petName = postPetRes.response?.body?.name;
  });

  test("Should Get posted pet", async () => {
    const getPetRes = await getPet(200, {id:petID});

    expect(getPetRes.response?.body?.id).toEqual(petID);
    expect(getPetRes.response?.body?.name).toEqual(petName);
  });
});
