import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  cy.visit("https://practicetestautomation.com/practice-test-login/");
});

When("the user enters a valid username and password", () => {
  cy.get("#username").type("student");
  cy.get("#password").type("Password123");
  cy.get("#submit").click();
});

When("the user enters an invalid username and password", () => {
  cy.get("#username").type("stu");
  cy.get("#password").type("123");
  cy.get("#submit").click();
});

Then("the user is redirected to the landing page", () => {
  cy.url().should("include", "logged-in-successfully");
  cy.contains("Congratulations student").should("be.visible");
});

Then("the user sees an error message", () => {
  cy.contains("Your password is invalid!").should("be.visible");
});
