const db = require("./db");
const { Airports, User, Transportation, Quote } = require("./models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const LA_airport = await Airports.create({
    name: "LA",
  });
  const Calgary_airport = await Airports.create({
    name: "Calgary",
  });
  const Newyork_airport = await Airports.create({
    name: "Newyork",
  });
  const Vancouver_airport = await Airports.create({
    name: "Vancouver",
  });

  const RentCar_trans = await Transportation.create({
    type: "Rent Car",
  });
  const Bus_trans = await Transportation.create({
    type: "Bus",
  });
  const Taxi_trans = await Transportation.create({
    type: "Taxi",
  });
  const Heli_trans = await Transportation.create({
    type: "Helicopter",
  });

  const plan_liam = await Quote.create({
    price: 2000,
    depatureDate: new Date("2021-01-01"),
    returnDate: new Date("2021-01-05"),
    transportationId: RentCar_trans.id,
    fromId: Calgary_airport.id,
    destId: Newyork_airport.id,
  });

  const plan_james = await Quote.create({
    price: 3000,
    depatureDate: new Date("2021-02-01"),
    returnDate: new Date("2021-02-05"),
    transportationId: Bus_trans.id,
    fromId: LA_airport.id,
    destId: Vancouver_airport.id,
  });

  const plan_david = await Quote.create({
    price: 2000,
    depatureDate: new Date("2021-02-01"),
    returnDate: new Date("2021-02-05"),
    transportationId: Taxi_trans.id,
    fromId: Newyork_airport.id,
    destId: Vancouver_airport.id,
  });

  await User.create({
    name: "Liam",
    contactInfo: "+14030000000",
    people: 2,
    quoteId: plan_liam.id,
  });

  await User.create({
    name: "David",
    contactInfo: "+14030000000",
    people: 5,
    quoteId: plan_david.id,
  });

  await User.create({
    name: "James",
    contactInfo: "+14030000000",
    people: 3,
    quoteId: plan_james.id,
  });

  console.log(`seeded quote database`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
