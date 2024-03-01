import { render, screen } from "@testing-library/react";
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
          <ResContextProvider
            value={{ resData: resDataMock, filteredListData: resDataMock }}
          >
            <Main />
          </ResContextProvider>
        </Provider>
      </BrowserRouter>
    )
  );

  const resCards = screen.getAllByTestId("resCards");
  // expect(resCards.length)(2);
  expect(resCards.length).toBe(9)
});
