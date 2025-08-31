import { createIcon } from "@chakra-ui/react";

export const Icons = {
    logo: createIcon({
        displayName: "logo",
        path: async() => (await fetch("assets/logo")).json()
    })
}