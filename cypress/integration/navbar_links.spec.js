describe("Navbar links", () => {
    it("Tests the About link", () => {
        cy.visit("/");
        cy.get("div.navbar-burger.burger").wait(500).click();
        cy.get(".navbar-item").contains("About").click();
        cy.url().should("eq", "http://localhost:8000/about/");
    });

    it("Tests the Blog link", () => {
        cy.visit("/");
        cy.get("div.navbar-burger.burger").wait(500).click();
        cy.get(".navbar-item").contains("Blog").click();
        cy.url().should("eq", "http://localhost:8000/blog/");
    });

    it("Tests the Home link", () => {
        cy.visit("/about/");
        cy.get("a.site-name").wait(500).click();
        cy.url().should("eq", "http://localhost:8000/");
    });
});
