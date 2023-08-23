import { useState } from 'react';
import { data } from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="containar">
        <h3>{people.length} Birthday Buddy</h3>
        <List people={people} />
        {people.length > 1 ? (
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople([])}
          >
            Clear all
          </button>
        ) : (
          <button
            className="btn btn-block"
            type="button"
            onClick={() => setPeople(data)}
          >
            Reset
          </button>
        )}
      </section>
    </main>
  );
}

export default App;
