import { Section } from "fsxa-api";
import { faker } from "@faker-js/faker";

export function createSection(optionalSection?: Partial<Section>): Section {
    const section: Section = {
        type: "Section",
        id: faker.string.uuid(),
        previewId: faker.string.uuid(),
        sectionType: faker.name.firstName(),
        data: {},
        children: [],
        name: "",
    };

    return { ...section, ...optionalSection };
}
