declare namespace Cypress {
  interface Chainable<Subject = any> {
    selectFile(filePath: string, options?: Partial<SelectFileOptions>): Chainable<Element>;
    intercept(url: string | RegExp, routeHandler: string | object): Chainable<null>;
    interceptStatus200(url: string): Chainable<void>;
    interceptStatus500(url: string): Chainable<void>;
  }
}