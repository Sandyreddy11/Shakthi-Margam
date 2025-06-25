import { queryFundingOpportunities, getPersonalizedRecommendations } from '../telangana-resources-integration';

describe('queryFundingOpportunities', () => {
  test('filters opportunities by funding type', () => {
    const loans = queryFundingOpportunities({ fundingType: 'Loan' });
    expect(loans.length).toBeGreaterThan(0);
    expect(loans.every(op => op.fundingType === 'Loan')).toBe(true);
  });

  test('filters early stage opportunities', () => {
    const early = queryFundingOpportunities({ businessStage: 'early' });
    expect(early.length).toBeGreaterThan(0);
    // Every result should satisfy one of the early-stage conditions
    const isEarly = (title: string, desc: string, amount: string) => {
      const t = title.toLowerCase();
      const d = desc.toLowerCase();
      return (
        t.includes('pre-incubation') ||
        t.includes('early') ||
        d.includes('early stage') ||
        d.includes('starting') ||
        amount.includes('5 lakhs')
      );
    };
    expect(early.every(o => isEarly(o.title, o.description, o.amount))).toBe(true);
    const ids = early.map(o => o.id);
    expect(ids).not.toContain('wehub-incubation');
    expect(ids).not.toContain('wehub-acceleration');
  });

  test('filters growth stage opportunities', () => {
    const growth = queryFundingOpportunities({ businessStage: 'growth' });
    expect(growth.length).toBeGreaterThan(0);
    const isGrowth = (title: string, desc: string) => {
      const t = title.toLowerCase();
      const d = desc.toLowerCase();
      return (
        t.includes('incubation') ||
        t.includes('acceleration') ||
        d.includes('scaling') ||
        d.includes('growth')
      );
    };
    expect(growth.every(o => isGrowth(o.title, o.description))).toBe(true);
    const ids = growth.map(o => o.id);
    expect(ids).not.toContain('wehub-pre-incubation');
  });
});

describe('getPersonalizedRecommendations', () => {
  test('returns funding opportunities matching profile stage', () => {
    const profile = {
      industry: 'Food Processing',
      businessStage: 'growth',
      location: 'Hyderabad',
      challenges: [] as string[]
    };

    const expected = queryFundingOpportunities({
      industry: profile.industry,
      businessStage: profile.businessStage
    }).slice(0, 3);

    const rec = getPersonalizedRecommendations(profile);
    expect(rec.fundingOpportunities).toEqual(expected);
    expect(rec.fundingOpportunities.length).toBeLessThanOrEqual(3);
  });
});
