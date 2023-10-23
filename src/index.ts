import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from "./matchReader";
import {ConsoleReport} from "./reportTargets/ConsoleReport";
import {WinAnalysis} from "./analysis/WinAnalysis";
import {Summary} from "./Summary";
import {HtmlReport} from "./reportTargets/HtmlReport";



const matchReader = MatchReader.fromCsv('football.csv')



const summary = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);


