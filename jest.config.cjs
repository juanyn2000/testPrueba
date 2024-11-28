// module.exports = {
//     preset: '@vue/cli-plugin-unit-jest/presets/default', // Compatibilidad básica con Vue 3
//     testEnvironment: 'jsdom',
//     transform: {
//       '^.+\\.vue$': 'vue-jest', // Transforma archivos .vue
//       '^.+\\.[tj]sx?$': 'babel-jest', // Transforma archivos JavaScript o TypeScript
//     },
//     moduleFileExtensions: ['js', 'json', 'vue'], // Extensiones que manejará Jest
//     transformIgnorePatterns: [
//       '/node_modules/', // Ignora la transformación de dependencias en node_modules
//     ],
//     testMatch: ['**/tests/**/*.spec.[jt]s?(x)'], // Ubicación de los archivos de prueba
//   };
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
     '^.+\\.vue$': '@vue/vue3-jest',
     '^.+\\js$': 'babel-jest'
    },
    testRegex:
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
    moduleFileExtensions: ['vue', 'js'],
    moduleNameMapper: {
     '^@/(.*)$': '<rootDir>/src/$1'
    },
    coveragePathIgnorePatterns: ['/node_modules/',
    '/tests/'],
    coverageReporters: ['text', 'json-summary'],
    testEnvironmentOptions: {
     customExportConditions: ['node', 'node-addons']
    }
    }