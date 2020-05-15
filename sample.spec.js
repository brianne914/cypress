describe('Sample', () => {

    beforeEach(() => {
        cy.visit('https://app.gogrow.com/login');
        cy.get('input[name="email"]').type('brianne914@gmail.com');
        cy.get('input[name="password"]').type("Ilsjsiomv!123");
        cy.contains('Log In').click();
        cy.contains('Dashboards');
    })
    it('has a title', () => {
        cy.contains('Dashboards')
        cy.get('.metricTile---titleBar---icjyQ').click()
        cy.get('.isvg loaded').click()
        //cy.get('#Oval-4').click()
        cy.get('.MenuItem---menu-item---ph6yu menuItem STATIC-dashboard-metric-menuOptionCopy').click()
        cy.contains('Copy Metric to Dashboard');
        cy.get('.Dropdown---textFieldInput---1FRZ2 Dropdown---hasAppend---2y5rh TextField---isDropdown---35R4y').click()
        cy.get('.DropdownOption---text---1zBOj').select()
        cy.contains('Ok').click()
        cy.contains('Copy of Sales by Month')
        cy.get('.isvg loaded batmanBar---chevron---2tU9k batmanBar---pointUp---3RYlL').click()
        cy.get('.<span class="sidebar---dashboardName---2j7PR STATIC-dashboard-sidebar-goToDashboard">Sales Dashboard</span>').click()
        cy.contains('Sales by Month')
    })
})

