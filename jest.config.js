module.exports = {
    testEnvironment: "jsdom",
    collectCoverageFrom: ["<rootDir>/**/*.{js,ts,tsx}", "!**/pages/**", "!**/node_modules/**", "!**/vendor/**"],
    coveragePathIgnorePatterns: ["/pages/"]
}
