import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddItem from "./AddItem";

describe('Add Item Component', function() {
    it('should display an "Add item" form', function() {
        const mockOnAdd = jest.fn();
        render(<AddItem onAdd={mockOnAdd}/>);
        const theLabel = screen.getByLabelText(/New/i);
        expect(theLabel).toBeInTheDocument();
        const theTextField = screen.getByRole("textbox", { name: /New/i });
        expect(theTextField).toBeInTheDocument();
        const theSubmitButton = screen.getByRole("button");
        expect(theSubmitButton).toBeInTheDocument();
        const textInputEvent = { target: { value: "My new value" } };
        fireEvent.input(theTextField, textInputEvent);
        expect(theTextField).toHaveValue('My new value');
        fireEvent.click(theSubmitButton);
        expect(mockOnAdd).toHaveBeenCalledTimes(1);
        expect(mockOnAdd).toHaveBeenCalledWith('My new value');
    });
});
