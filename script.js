function calculateRewards(totalSpend, competitivePercentage, nonCompetitivePercentage, competitiveRewardPoints, nonCompetitiveRewardPoints) {
    let competitiveSpend = totalSpend * (competitivePercentage / 100);
    let nonCompetitiveSpend = totalSpend * (nonCompetitivePercentage / 100);

    let competitivePoints = (competitiveSpend / 75) * competitiveRewardPoints;
    let nonCompetitivePoints = (nonCompetitiveSpend / 75) * nonCompetitiveRewardPoints;

    return competitivePoints + nonCompetitivePoints
