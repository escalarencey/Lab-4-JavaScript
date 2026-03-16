function getTopScorers(playerList) {
  return playerList
    // 1. Filter: Keep only those with a score > 8
    .filter(player => player.score > 8)
    // 2. Map: Transform the objects into just their 'name' strings
    .map(player => player.name)
    // 3. Join: Turn the array of names into one string
    .join(", ");
}

// Example Data (10 Players)
const leaderboard = [
  { name: "Alice", score: 10 }, { name: "Bob", score: 5 },
  { name: "Charlie", score: 12 }, { name: "Diana", score: 7 },
  { name: "Eve", score: 9 }, { name: "Frank", score: 4 },
  { name: "Grace", score: 15 }, { name: "Hank", score: 8 },
  { name: "Ivy", score: 11 }, { name: "Jack", score: 6 }
];

console.log(getTopScorers(leaderboard)); 
// Output: "Alice, Charlie, Eve, Grace, Ivy"

