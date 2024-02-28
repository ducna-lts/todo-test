export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  snapshotSerializers: [
    '@emotion/jest/serializer', /* if needed other snapshotSerializers should go here */
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
