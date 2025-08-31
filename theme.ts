import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#020120" },
        whiteish: {
          DEFAULT: {value: "#f9f9f7"}
        },
        blue: {
          950: {value: "#3848c8"}
        },
        green: {
          950: {value: "#d2e874"}
        }
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "whiteish"
    }
  },
  conditions: {
    off: "&:is([data-state=off])",
    on: "&:is([data-state=on])",
  },
});

export const system = createSystem(defaultConfig, config)
