describe('e2e tests', () => {
    it('Should answer questions', () => {
        //homepage
        cy.visit('http://localhost:3000');
        cy.contains('Trivia-Quiz');
        cy.get('[name=questionsNum]').clear().type('3');
        cy.contains('Any category').parent().select('History');
        cy.contains('Any difficulty').parent().select('Easy');
        cy.contains('Any type').parent().select('Multiple Choice');
        cy.contains('Start quiz').should('be.visible').click();

        //questions page
        cy.contains('Question 1 / 3');
        cy.contains('Category: History');
        // timer
        cy.get('.css-f1j64i');
        // question title
        cy.get('.css-1ijtmr0');

        // first question page
        cy.get('.css-1ymz00y');
        // answer-selected
        cy.get('.css-1p53m7s').first().click();
        cy.get('.css-1m063ge').contains('1');
        cy.contains('Back');
        cy.contains('Next').click();

        // second question page
        cy.contains('Question 2 / 3');
        cy.contains('Category: History');
        cy.get('.css-f1j64i');
        cy.get('.css-1ijtmr0');

        cy.get('.css-1ymz00y');

        // answer-selected
        cy.get('.css-1p53m7s').first().click();
        cy.get('.css-1m063ge').contains('2');
        cy.contains('Previous');
        cy.contains('Next').click();

        // third question page
        cy.contains('Question 3 / 3');
        cy.contains('Category: History');
        cy.get('.css-f1j64i');
        cy.get('.css-1ijtmr0');

        cy.get('.css-1ymz00y');

        // answer-selected
        cy.get('.css-1p53m7s').first().click();
        cy.get('.css-1m063ge').contains('3');
        cy.contains('Previous');
        cy.contains('Finish').click();

        //results page
        cy.contains('Results').should("be.visible");
        cy.contains('You got');
        cy.contains('Remaining time : 02:5');

        cy.contains('Question 1');
        cy.contains('Your answer:');
        cy.contains('Correct answer:');

        cy.contains('Question 2');
        cy.contains('Question 3');

        cy.contains('Retry');
        cy.contains('New Quiz').click();
        cy.contains('Trivia-Quiz');
    });

    it('Should display an alert', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Trivia-Quiz');
        cy.contains('Any category')
            .parent()
            .select('Entertainment: Television');
        cy.contains('Any difficulty').parent().select('Easy');
        cy.contains('Any type').parent().select('True / False');
        cy.wait(1500);
        cy.contains('Start quiz').click();
        cy.contains('There were no results').should('be.visible');
    });

    it('Should display error message', () => {
        cy.visit('http://localhost:3000/jksdfsf');
        cy.contains('Not Found').should('be.visible');
        cy.contains('Go back home').should('be.visible').click();
        cy.contains('Trivia-Quiz').should('be.visible').click();
    });
});
