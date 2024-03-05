import React from 'react';
import Resources from './Resources'; // Importer Resources-komponenten

function Layout() {
  return (
    <div>
      <header>
        <nav id="resourceNav">
          {/* Bruk Resources-komponenten for å vise kategorier */}
          <Resources />
        </nav>
        <div id="resourceContent">
          {/* Innholdet vil bli vist av Resources-komponenten basert på valgt kategori */}
        </div>
      </header>
    </div>
  );
}

export default Layout;