describe("Page <title> elements", () => {
    it("Tests the home page title", () => {
        cy.visit("/");
        cy.title().should("eq", "My Website | Home Page");
    });

    it("Tests the About page title", () => {
        cy.visit("/about/");
        cy.title().should("eq", "About Page | My Website");
    });

    it("Tests the Blog page title", () => {
        cy.visit("/blog/");
        cy.title().should("eq", "Blog | My Website");
    });
});
