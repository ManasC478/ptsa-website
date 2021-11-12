import React, { useEffect } from 'react';
import { getDocumentTitle } from './utils';

// import components
import Routers from './Routes/Routers';

function App() {

  return (
    <main id="ptsa-website">
      <Routers />
    </main>
  );
}

export default App;
