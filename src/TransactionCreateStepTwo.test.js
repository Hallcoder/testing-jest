import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo"

/* eslint-disable prettier/prettier */
test('when user enters valid amount and note the button is enabled',async() => {
    render(<TransactionCreateStepTwo receiver={{id:'1'}} sender={{id:'2'}}/>);
    expect(await screen.findByRole('button',{name:/pay/i})).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText(/amount/i), '50');
    userEvent.type(screen.getByPlaceholderText(/add a note/i), 'dinner');
    expect(await screen.findByRole('button',{name:/pay/i})).toBeEnabled();
})