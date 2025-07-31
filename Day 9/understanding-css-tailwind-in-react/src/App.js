// external css
import './index.css'
import { AddingTwailwind } from './AddingTailwind';

function App() {
    return (
        <div>
            {/* internal css */}
            <style>
                {`p {
                    color: green ;
                }`}
            </style>
            {/* inline css */}
            <h1 style={{ color: "blue" }}>my react is working</h1>
            <p>
In a small village nestled between hills, lived an old painter named Ravi. His house stood at the edge of the forest, where the trees whispered stories to the wind. He had painted thousands of pictures in his lifetime, but lately, his hands had grown tired, and his colors seemed dull.

One autumn, a young girl named Meera moved into the village with her parents. She was quiet and sickly, always wrapped in a blanket, watching the world from her window. Her favorite view was of the tree outside Ravi’s house — a tall, ancient thing whose leaves turned golden every fall.

As days passed and the leaves began to fall, Meera grew weaker. One evening, she whispered to her mother, “When the last leaf falls, I think I’ll go too.”

Ravi overheard her and said nothing. That night, a fierce storm swept through the village. In the morning, the tree stood nearly bare — only one leaf clung to a high branch.

But the next day, and the one after, that leaf didn’t fall.

Meera watched it every day, slowly gaining strength, hope returning to her eyes. She smiled more, talked more, even started walking again. “That leaf saved me,” she told Ravi one morning.

The old man smiled and looked up. The leaf still clung there, unmoving.

What she didn’t know was that on the night of the storm, Ravi had painted a perfect leaf and nailed it to the tree in the rain.

It was the last painting he ever made.

---

</p>
            <h2>this is my external css styling</h2>
            <AddingTwailwind />
        </div >
    )
}

export { App };