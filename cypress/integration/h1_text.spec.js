describe("H1 elements", () => {
    it("Tests the home page h1 header", () => {
        cy.visit("/");
        cy.get("h1").should("have.text", "Hello World");
    });
    it("Tests the About page h1 header", () => {
        cy.visit("/about/");
        cy.get("h1").should("have.text", "About Page");
    });
    it("Tests the Blog page h1 header", () => {
        cy.visit("/blog/");
        cy.get("h1").should("have.text", "Blog");
    });
});
