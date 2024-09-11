import { render, screen } from '@testing-library/react';
import { LabelTestField } from '.';
import { emailPlaceholder, emailWarningText } from '../../../utils/constants';
describe('Label textfield Component', () => {
    test('component render correctly', () => {
        render(
            <LabelTestField
                label={'email'}
                id={'email'}
                type={'text'}
                value={''}
                placeholder={emailPlaceholder}
                helperText={emailWarningText}
                error={false}
            />
        );
        expect(screen.getByTestId('label-input')).toBeInTheDocument;
    });
});
