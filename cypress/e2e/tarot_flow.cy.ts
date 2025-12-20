describe('Flujo de Lectura de Tarot (Happy Path)', () => {
  it('Debe permitir al usuario completar una lectura de 3 cartas', () => {
    // 1. Visitar la Home
    cy.visit('/');

    // 2. Navegar a la página de Tarot desde el Navbar
    cy.contains('a', /tarot/i).click();

    // 3. Verificar que estamos en la URL de tarot
    cy.url().should('include', '/tarot');

    // 4. Seleccionar 3 cartas
    cy.get('.game-board').within(() => {
      cy.get('img').first().click({ force: true });
      cy.get('img').eq(1).click({ force: true });
      cy.get('img').eq(2).click({ force: true });
    });

    // 5. Esperar a que el estado cambie a RESULT y aparezca el modal
    cy.contains('h1', /cartas elegidas/i, { timeout: 5000 }).should(
      'be.visible'
    );

    // 6. Verificar que se muestran las 3 cartas en el resultado
    cy.get('div.fixed').find('img').should('have.length', 3);

    // 7. Reiniciar el juego
    cy.contains('button', /volver al tarot/i).click();

    // 8. El modal debería desaparecer
    cy.contains('h1', /cartas elegidas/i).should('not.exist');
  });
});
