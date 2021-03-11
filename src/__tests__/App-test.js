import React from 'react';
import {Pressable} from 'react-native';
import {render} from '@testing-library/react-native';

it('toBeDisabled should equal not.toBeEnabled', async () => {
  const {getByTestId} = await render(
      <Pressable disabled={true}>
        <Pressable testID="subject" disabled={false} />
      </Pressable>,
  );
  const subject = getByTestId('subject');

  expect(subject).toBeDisabled();

  // This expectation fails
  expect(subject).not.toBeEnabled();
});