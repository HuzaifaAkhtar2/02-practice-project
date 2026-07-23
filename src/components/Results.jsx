import { calculateInvestmentResults } from "../util/investment.js";
function Results({ input }) {
  const result = calculateInvestmentResults(input);
  console.log(result)
  return <div id="results"></div>;
}

export default Results;
