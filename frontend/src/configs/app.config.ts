export type AppConfig = {
  apiPrefix: string;
  authenticatedEntryPath: string;
  unAuthenticatedEntryPath: string;
  tourPath: string;
  locale: string;
  dateFormat: string;
};

const appConfig: AppConfig = {
  apiPrefix: "/api",
  authenticatedEntryPath: "/home",
  unAuthenticatedEntryPath: "/login",
  tourPath: "/",
  locale: "it",
  dateFormat: "L",
};

export default appConfig;
