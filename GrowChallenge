    //Hover over a metric to reveal metric tile options
    //Click the 3 dot menu to display more options
	//Copy the metric to another dashboard (Copy only, not Copy and Edit)
	//Navigate back to your original dashboard to verify metric is still present

describe('Grow', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('Visits Dashboard', function () {
      //log in 
      cy.visit('https://app.gogrow.com/login')
       cy.get('input[name="email"]').type('brianne914@gmail.com')
       cy.get('input[name="password"]').type("Password!123")
       cy.contains('Log In').click()
         //hovers so menu button appears
         cy.get('.metricTile---titleBar---icjyQ').trigger('mouseover')
         //clicks three dots
         cy.get('.Popover---popover-target---TiAh9 > .metricMenu---item---biIfV > .isvg > svg').click()
         //clicks copy button
         cy.get('.STATIC-dashboard-metric-menuOptionCopy').click()
         //clicks ok
         cy.contains('OK').click()
         //assert copied dashboard is present
         cy.get('.metricTile---titleBar---icjyQ').should('contain', 'Copy of Sales by Month')
       //assert original dashboard is still present
       cy.get('.metricTitle---title---2-VDs').should('contain', 'Sales by Month')

})}
)

