// jest.config.js
module.exports = {
  // 1. Simulate Browser (so you can test DOM logic)
  testEnvironment: 'jsdom',

  // 2. Look for these file types
  moduleFileExtensions: ['js', 'jsx'],
  
  // 3. Where to look for modules
  moduleDirectories: ['node_modules'],

  // 4. MOCKING (The "Translation Table")
  moduleNameMapper: {
    // Handling CSS/LESS: Use identity-obj-proxy (Tutorial requirement)
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    
    // Handling Aliases: Map '@/' to 'src/' (Best practice for Webpack projects)
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 5. Transformation
  transform: {
    // Use Babel for JS files
    '^.+\\.jsx?$': 'babel-jest',
    // Use our custom transformer for assets
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  verbose: true,
};