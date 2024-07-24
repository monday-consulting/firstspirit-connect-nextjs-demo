import type de_DE from "./messages/de_DE.json";

type Messages = typeof de_DE;

declare global {
  interface IntlMessages extends Messages {}
}
