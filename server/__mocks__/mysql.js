const mockDB = {
  connect: jest.fn(),
  query: jest.fn(),
};

module.exports = {
  createConnection: () => mockDB,
  mockDB,
};
