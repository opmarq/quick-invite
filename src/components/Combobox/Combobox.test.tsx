import React from "react";
import {
  fireEvent,
  getByLabelText,
  getByText,
  queryByText,
  render,
  screen,
} from "@testing-library/react";
import Combobox, { IItem } from "./Combobox";

let suggestions: IItem[] = [
  {
    id: "1",
    text: "Omar",
  },
  {
    id: "2",
    text: "Chajia",
  },
];

let selected: IItem[] = [
  {
    id: "1",
    text: "Omar",
  },
];

let onChange = () => {};
let onSelect = () => {};
let onRemove = () => {};
let value = "";

beforeEach(() => {
  onChange = jest.fn();
  onSelect = jest.fn();
  onRemove = jest.fn();
});

test("render Comboxbox with selected item", () => {
  render(
    <Combobox
      suggestions={[]}
      selected={selected}
      onChange={onChange}
      value={value}
      onSelect={onSelect}
      onRemove={onRemove}
      isLoading={false}
    />
  );
  const element = screen.getByText(/Omar/i);
  expect(element).toBeInTheDocument();
});

test("render Comboxbox suggestions list without selected one", () => {
  render(
    <Combobox
      suggestions={suggestions}
      selected={selected}
      onChange={onChange}
      value={value}
      onSelect={onSelect}
      onRemove={onRemove}
      isLoading={false}
    />
  );

  const selections = screen.getByLabelText(/selections/i);
  const selectedElement = getByText(selections, /Omar/);
  expect(selectedElement).toBeInTheDocument();

  const suggestionsElement = screen.getByLabelText(/suggestions/);
  const suggestedElement = getByText(suggestionsElement, /Chajia/);
  expect(suggestedElement).toBeInTheDocument();

  expect(queryByText(suggestionsElement, /Omar/)).toBeNull();
});

test("Select Combobox suggested items", () => {
  render(
    <Combobox
      suggestions={suggestions}
      selected={selected}
      onChange={onChange}
      value={value}
      onSelect={onSelect}
      onRemove={onRemove}
      isLoading={false}
    />
  );

  const suggestionsElement = screen.getByLabelText(/suggestions/);
  const suggestedElement = getByText(suggestionsElement, /Chajia/);
  fireEvent.click(suggestedElement);

  expect(onSelect).toBeCalledWith({
    id: "2",
    text: "Chajia",
  });
});

test("Remove selected item from Combobox", () => {
  render(
    <Combobox
      suggestions={suggestions}
      selected={selected}
      onChange={onChange}
      value={value}
      onSelect={onSelect}
      onRemove={onRemove}
      isLoading={false}
    />
  );

  const selections = screen.getByLabelText(/selections/i);
  const selectedElement = getByText(selections, /Omar/).closest(
    "[aria-label='tag']"
  ) as HTMLElement;
  const closeElement = getByLabelText(selectedElement, /close/);
  fireEvent.click(closeElement);
  expect(onRemove).toBeCalledWith({
    id: "1",
    text: "Omar",
  });
});
