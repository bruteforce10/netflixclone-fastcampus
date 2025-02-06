require("dotenv").config();
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../index");

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URL);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("Resource /my-movies", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get(
      "/my-movies/ferdiputra385@gmail.com/aaa"
    );
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Get Favorite Movies Success");
  });

  it("should return unauthorized message", async () => {
    const response = await request(app).get(
      "/my-movies/ferdiputra385@gmail.com/aa"
    );
    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Error, Unauthorized");
  });

  it("should return failed to save favorite movies", async () => {
    const response = await request(app)
      .post("/my-movies")
      .set("Content-Type", "application/json")
      .send({
        email: "ferdiputra385@gmail.com",
        token: "aaaaa",
        data: { id: 1, description: "test", title: "sdas" },
      });

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toBe("Error, Unauthorizedc");
  });
});
