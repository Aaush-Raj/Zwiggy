import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import ResContextProvider from "../../context/ResContextProvider";
import resDataMock from '.././mocks/resDataMock.json'

test("should load header components", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <ResContextProvider value={resDataMock}>
          <Header />
        </ResContextProvider>
      </Provider>
    </BrowserRouter>
  );

  const headerText = screen.getByText("ZWIGGY");
  const headerSearchBar = screen.getByPlaceholderText(
    "search resturant by name"
  );

  // Add more assertions as needed
  expect(headerText).toBeInTheDocument();
  expect(headerSearchBar).toBeInTheDocument();
});
