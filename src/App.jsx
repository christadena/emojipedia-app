import Entry from "./Entry"; // Importing the Entry component
import emojipedia from "./emojipedia"; // Importing the emojipedia constant
import "./App.css";

// Function to create an Entry component for each emoji

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emojiTerm) => (
          <Entry
            key={emojiTerm.id}
            emoji={emojiTerm.emoji}
            name={emojiTerm.name}
            meaning={emojiTerm.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
