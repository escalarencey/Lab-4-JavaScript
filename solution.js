// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}
