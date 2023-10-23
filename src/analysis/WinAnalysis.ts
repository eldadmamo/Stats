import {MatchData} from "../MatchData";
import {Analyzer} from "../Summary";
import {MatchResult} from "../matchResult";

export class WinAnalysis implements Analyzer{
    constructor(public team: string) {
    }

    run(matches: MatchData[]):string {
        let manUnitedWins = 0;

        for(let match of matches ) {
            if(match[1] === 'Man United' && match[5] === MatchResult.homeWin) {
                manUnitedWins++;
            } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin) {
                manUnitedWins++;
            }
        }

        return `Team ${this.team} and ${manUnitedWins}`;
    }
}