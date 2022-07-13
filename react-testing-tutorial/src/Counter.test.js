import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const incrementBtn = screen.getByTestId("increment");
    fireEvent.click(incrementBtn);
    //assert the expected result
    expect(counter).toHaveTextContent("1");
    fireEvent.click(incrementBtn);
    //assert the expected result
    expect(counter).toHaveTextContent("2");
    // console.log(counter);
});

test("decrements counter", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    fireEvent.click(decrementBtn);
    expect(counter).toHaveTextContent("-1");
});

// test('second test', function () {
//     console.log('second test');
// })