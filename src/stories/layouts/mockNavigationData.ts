import type { NavigationStructure } from "@/components/layouts/Navigation/Navigation";

export const mockNavigationData: NavigationStructure = {
  structure: [
    {
      seoRoute: "/unsere-lösungen/",
      label: "Unsere Lösungen",
      fsNavItemId: "6b56db03-a99b-45ad-8b71-79ff4530cb59",
      children: [
        {
          seoRoute: "/unsere-lösungen/sicherheit-zu-hause/",
          label: "Unsere Lösungen",
          fsNavItemId: "6b56db03-a99b-45ad-8b71-79ff4530cb58",
        },
        {
          seoRoute: "/unsere-lösungen/wußten-sie-schon/",
          label: "Wußten Sie schon?",
          fsNavItemId: "9197c2b3-403b-46c7-9bff-e14fad9b0dd2",
        },
      ],
    },
    {
      seoRoute: "/produkte/",
      label: "Produkte",
      fsNavItemId: "6b56db03-a99b-45ad-8b71-79ff4530cb57",
      children: [
        {
          seoRoute: "/produkte/security/",
          label: "Produkte",
          fsNavItemId: "c26bb936-5cd7-40a5-bd0f-ea3e21354252",
          children: [
            {
              seoRoute: "/produkte/security/türschlösser/",
              label: "Türschlösser",
              fsNavItemId: "dddbde5c-cfb9-422e-8f71-b2c51a3fed8b",
            },
            {
              seoRoute: "/produkte/security/innenraumkameras/",
              label: "Innenraumkameras",
              fsNavItemId: "5b85934e-d1bf-4512-820e-3542fe8719c8",
            },
            {
              seoRoute: "/produkte/security/kameras-für-den-außenbereich/",
              label: "Kameras für den Außenbereich",
              fsNavItemId: "b164b5ee-0cd1-4fd1-bc2b-4deca2cacba8",
            },
          ],
        },
        {
          seoRoute: "/produkte/smart-equipment/",
          label: "Smart Equipment",
          fsNavItemId: "2c38fae4-fcfc-427d-b2fd-a74179857943",
        },
      ],
    },
    {
      seoRoute: "/über-uns/",
      label: "Über uns",
      fsNavItemId: "6b56db03-a99b-45ad-8b71-79ff4530cb56",
    },
  ],
};
