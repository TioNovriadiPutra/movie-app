module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src"],
          alias: {
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@store": "./src/store",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
