import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.+)': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
};

export default config;
