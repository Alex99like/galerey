import React from 'react';
import { IApprove, IWhoSee } from '../customCard/CustomCard';
import Validate from './Validate';

describe('test form', () => {
  const valueTitleTrue = {
    current: {
      value: 'Alesx',
    },
  };

  const valueTitleFalse = {
    current: {
      value: 'Ax',
    },
  };

  it('test input text', () => {
    const checkTrue = Validate.validateTitle(valueTitleTrue as React.RefObject<HTMLInputElement>);
    expect(checkTrue).toBe(true);

    const checkFalse = Validate.validateTitle(valueTitleFalse as React.RefObject<HTMLInputElement>);
    expect(checkFalse).toBe(false);
  });

  const valueWhoSeeTrue = {
    allPeople: { current: { checked: true, value: 'allPeople' } },
    fiends: { current: { checked: false } },
    favorites: { current: { checked: false } },
  };

  const valueWhoSeeFalse = {
    allPeople: { current: { checked: false } },
    fiends: { current: { checked: false } },
    favorites: { current: { checked: false } },
  };

  it('test input radio', () => {
    const checkTrue = Validate.validateWhoSee(valueWhoSeeTrue as IWhoSee);

    const checkFalse = Validate.validateWhoSee(valueWhoSeeFalse as IWhoSee);

    expect(checkTrue).toBe(true);
    expect(checkFalse).toBe(false);
  });

  const valueColorTrue = {
    current: { value: 'rgba(255, 255, 0, 0.384)' },
  };

  const valueColorFalse = {
    current: { value: '#ffffff' },
  };

  it('test input color', () => {
    const checkTrue = Validate.validateColor(valueColorTrue as React.RefObject<HTMLSelectElement>);

    const checkFalse = Validate.validateColor(
      valueColorFalse as React.RefObject<HTMLSelectElement>
    );

    expect(checkTrue).toBe(true);
    expect(checkFalse).toBe(false);
  });

  const valueDateTrue = {
    current: { value: '2022-10-07' },
  };

  const valueDateFalse = {
    current: { value: '2023-10-08' },
  };

  it('test input date', () => {
    const checkTrue = Validate.validateDate(valueDateTrue as React.RefObject<HTMLInputElement>);

    const checkFalse = Validate.validateDate(valueDateFalse as React.RefObject<HTMLInputElement>);

    expect(checkTrue).toBe(true);
    expect(checkFalse).toBe(false);
  });

  const valueApproveTrue = {
    alerts: { current: { checked: false } },
    likes: { current: { checked: true } },
  };

  const valueApproveFalse = {
    alerts: { current: { checked: false } },
    likes: { current: { checked: false } },
  };

  it('test input checkbox', () => {
    const checkTrue = Validate.validateApproved(valueApproveTrue as IApprove);

    const checkFalse = Validate.validateApproved(valueApproveFalse as IApprove);

    expect(checkTrue).toBe(true);
    expect(checkFalse).toBe(false);
  });
});
