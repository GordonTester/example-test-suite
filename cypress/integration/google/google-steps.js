import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I visit Google`, () => {
  cy.visit(url);
});

Then(`I am on Google`, () => {
  cy.contains('Google');
});