import type en_GB from "./messages/en_GB.json";

type Messages = typeof en_GB;

declare global {
  interface IntlMessages extends Messages {}
}
