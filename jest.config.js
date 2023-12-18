import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {

  coverageProvider: "v8",
  testEnvironment: "jsdom",

};

export default createJestConfig(config)
