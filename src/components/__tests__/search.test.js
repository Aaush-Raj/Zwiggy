// INTEGRATION TEST FOR SEARCH COMPONENT, HEADER, MAIN, RESCARD, etc

import { fireEvent, render, screen } from "@testing-library/react";
import Main from "../Main";
import { Provider } from "react-redux";
import appStore from "../../store/store";
import { BrowserRouter } from "react-router-dom";
import ResContext from "../../context/ResContext";
import ResContextProvider from "../../context/ResContextProvider";
import resDataMock from ".././mocks/resDataMock.json";
import resMenuMock from ".././mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(resMenuMock);
    },
  });
});

it("should load main components", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <ResContextProvider value={{ resData: resDataMock, filteredListData: resDataMock }}>
            <Header />
            <Main />
          </ResContextProvider>
        </Provider>
      </BrowserRouter>
    )
  );

  const resCards = screen.getAllByTestId("resCards");
  expect(resCards.length).toBe(9);
  const searchBtn = screen.getByRole( 'button',{name:"Search"});
  const searchInput = screen.getByPlaceholderText( "search resturant by name");

  expect(searchBtn).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput,{target:{value:"bhature"}})
  fireEvent.click(searchBtn)

  // screen should load 5 cards as of current data, but in future it will change as swiggy changes its api data!
  expect(screen.getAllByTestId("resCards").length).toBe(5);
});
