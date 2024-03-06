import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({ rollupTypes: true }), react()],

  server: {
    port: 7890,
    strictPort: true,
  },
  build: {
    lib: {
      entry: "src/rekuest/index.tsx",
      name: "rekuest",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@apollo/client",
        "graphql-ws",
        "yup",
        "handlebars",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@apollo/client": "ApolloClient",
          "graphql-ws": "graphqlWs",
          yup: "yup",
          handlebars: "Handlebars",
          graphql: "graphql",
        },
      },
    },
  },
});
