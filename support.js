function petObject(id, name) {
  const petObject = {
    id: `${id}`,
    category: {
      id: 0,
      name: "string",
    },
    name: `${name}`,
    photoUrls: ["string"],
    tags: [
      {
        id: 0,
        name: "string",
      },
    ],
    status: "available",
  };

  return petObject;
}

module.exports = {
  petObject,
};
