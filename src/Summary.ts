import {MatchData} from "./MatchData";
import {WinAnalysis} from "./analysis/WinAnalysis";
import {HtmlReport} from "./reportTargets/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string) : void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string) {
        return new Summary(
          new WinAnalysis(team),
          new HtmlReport()
        );
    }
    constructor(public analyzer : Analyzer, public outputtarget: OutputTarget) {

    }

    buildAndPrintReport(matches: MatchData[]):void {
       const output =  this.analyzer.run(matches);
       this.outputtarget.print(output);
    }

}



