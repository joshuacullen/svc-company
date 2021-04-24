import { CompanyScoresModel } from '../../models';

const companyScorePresenter = (score: CompanyScoresModel): CompanyScore => ({
  dividend: score.dividend,
  future: score.future,
  health: score.health,
  past: score.past,
  value: score.value,
  total: score.value,
  sentence: score.sentence,
});

export default companyScorePresenter;
