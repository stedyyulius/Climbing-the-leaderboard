/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
Example



The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

int ranked[n]: the leaderboard scores
int player[m]: the player's scores
Returns

int[m]: the player's rank after each new score
Input Format

The first line contains an integer , the number of players on the leaderboard.
The next line contains  space-separated integers , the leaderboard scores in decreasing order.
The next line contains an integer, , the number games the player plays.
The last line contains  space-separated integers , the game scores.

The existing leaderboard, , is in descending order.
The player's scores, , are in ascending order.
*/

function climbingLeaderboard(ranked, player) {
    let result = [];
    let ranks = Array.from(new Set(ranked));

    for (let playerScore of player.reverse()) {

        if (playerScore < ranks[ranks.length - 1]) {
            result.push(ranks.length + 1);
        } else {
            let founded = false;
            let tmp = [...ranks];

            while (!founded) {

                if (tmp.length === 1) {
                    result.push(ranks.indexOf(tmp[0]) + 1);
                    break;
                }

                let middleIndex = Math.floor(tmp.length / 2);

                if (playerScore === tmp[middleIndex]) {

                    result.push(ranks.indexOf(tmp[middleIndex]) + 1);
                    break;

                } else if (playerScore <= tmp[middleIndex]) {

                    tmp = tmp.slice(middleIndex, tmp.length);

                } else if (playerScore > tmp[middleIndex]) {

                    if (playerScore < tmp[middleIndex - 1]) {
                        result.push(ranks.indexOf(tmp[middleIndex]) + 1);
                        break;
                    }

                    tmp = tmp.slice(0, middleIndex);

                }
            }
        }
    }

    return result.reverse();

}
