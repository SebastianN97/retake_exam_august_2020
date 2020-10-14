describe('Visitor can see Viaplay selections', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
        method: "GET",
        url: "https://content.viaplay.se/pc-se/serier/samtliga",
        response: "fixture:data.json",
    })
    cy.visit('/');
  })

  it('can see title of selection', () => {
    cy.get('[data-cy="data-35bb8a90-d40e-11e2-8b8b-0800200c9a66"]').within(() => {
      cy.get('[data-cy="selection"]').should(
        "contain",
        "series"
      )
    })
  })
})