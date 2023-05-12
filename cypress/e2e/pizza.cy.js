describe("Ana sayfa", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Form sayfası düğmesi", () => {
        cy.get("[id=order-pizza]").should("be.visible");
    });
    it("Form sayfası yönlenirme kontrolü", () => {
        cy.get("[id=order-pizza]").click();
        cy.location().should((loc) => expect(loc.pathname).to.eq('/pizza'));
    });
});

describe('Form Sayfası', () => {
    beforeEach(() => {
        cy.visit("/pizza");
    });

    it("Boyut girdisi", () => {
        cy.get("[name=size]").should('be.visible').should('have.length', 3);
    });

    it("Hamur girdisi", () => {
        cy.get("[name=size]").should('be.visible').should('have.length', 3);
    });

    it("Ekstra girdileri", () => {
        cy.get("[name=extras]").should('be.visible').should("have.length", 13);
    });
    
    it("Ad soyad girdisi & Hata çıktısı kontrolü", () => {
        cy.get("[name=flName]").should('be.visible').type("Ad Soyad").clear().siblings(".text-danger").should("be.visible");
    });

    it("Not girdisi", () => {
        cy.get("[name=note]").should('be.visible').type("Örnek not");
    });

    it("Pizza miktarı girdisi", () => {
        cy.get("[name=pizzaCount]").should("be.visible").should("have.length", 2);
        cy.get("[name=pizzaCounter]").should("be.visible");
    });

    it("Sipariş düğmesi", () => {
        cy.get("[id=order-button]").should("be.visible").should("be.disabled");
    });

    it("Sipariş alma & çıktı kontrolü", () => {
        cy.get("[name=size]").first().click({force: true})
        cy.get("[name=dough]").select("İnce")
        cy.get("[name=extras]").each((el, idx) => {
            if(idx === 2 || idx === 5 || idx === 12) cy.wrap(el).click()
        })
        cy.get("[name=flName]").type("Ad Soyad")
        cy.get("[name=note]").type("Örnek not")
        cy.get("[name=pizzaCount]").eq(1).click().click()
        cy.get("[id=order-button]").click();

        cy.get("[data-test=flName]").should('have.text', "Ad Soyad")
        cy.get("[data-test=size]").should('have.text', "Küçük Boy")
        cy.get("[data-test=dough]").should('have.text', "İnce")
        cy.get("[data-test=extras]").should('have.text', "Biber, Sucuk, Sarımsak")
        cy.get("[data-test=note]").should('have.text', "Örnek not")
        cy.get("[data-test=extrasPrice]").should('have.text', "15.00₺")
        cy.get("[data-test=totalPrice]").should('have.text', "300.00₺")
    })
});