import React from "react";
import { act, render, cleanup, waitForElement } from "@testing-library/react";
import axios from "axios";
import CarouselComponent from "../src/components/Content/carouselComponent";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Article from "../src/components/Content/Article";
import ContentHeader from "../src/components/Content/ContentHeader";
import { getTimeStamp, getSportIcon } from "./utils";
import { gamesArray } from "./mockData";

beforeEach(() => {
  axios.get = jest.fn(() =>
    Promise.resolve({ data: { liveEvents: gamesArray } })
  );
});

afterEach(cleanup);

test("should render all button with correct text", async () => {
  await act(async () => {
    const { getByText, getAllByText } = render(<CarouselComponent />);
    await waitForElement(() => getByText(gamesArray[0].event.name));
    expect(getAllByText("Place a bet")).toBeTruthy();
  });
});

test("should return exact number of rendered buttons", async () => {
  await act(async () => {
    const { getByText, getAllByText } = render(<CarouselComponent />);
    await waitForElement(() => getByText(gamesArray[0].event.name));
    expect(getAllByText("Place a bet").length).toEqual(2);
  });
});

test("should render name of team", async () => {
  await act(async () => {
    const { getByText } = render(<CarouselComponent />);
    await waitForElement(() => getByText(gamesArray[0].event.name));
    expect(getByText(gamesArray[0].event.name).textContent).toBe(
      "Tsykhotskiy, Andrey - Kuharchuk, Aleksandr"
    );
    expect(getByText(gamesArray[1].event.name).textContent).toBe(
      "Petukhov, Valery - Kizian, Volodymyr"
    );
  });
});

test("should render match with timestamp.", async () => {
  await act(async () => {
    const { getByTestId } = render(<CarouselComponent />);
    await waitForElement(() => getByTestId(gamesArray[0].event.start));
    expect(getByTestId(gamesArray[1].event.start).textContent).toEqual(
      getTimeStamp(gamesArray[1].event.start)
    );
  });
});

test("should render match with icon", async () => {
  await act(async () => {
    const { getByAltText } = render(<CarouselComponent />);
    await waitForElement(() => getByAltText(gamesArray[0].event.sport));
    getByAltText(gamesArray[1].event.sport);
  });
});

test("should render match scores", async () => {
  await act(async () => {
    const { getByText } = render(<CarouselComponent />);
    await waitForElement(() =>
      getByText(
        `${gamesArray[0].liveData.score.home} vs ${gamesArray[0].liveData.score.away}`
      )
    );
  });
});

test("should render button with link to Unibet Betting Client.", async () => {
  await act(async () => {
    const { getAllByText } = render(<CarouselComponent />);
    await waitForElement(() => getAllByText("Place a bet"));
    expect(getAllByText("Place a bet")[0].href).toBe(
      `https://www.unibet.com/betting#/event/live/${gamesArray[0].event.id}`
    );
    expect(getAllByText("Place a bet")[1].href).toBe(
      `https://www.unibet.com/betting#/event/live/${gamesArray[1].event.id}`
    );
  });
});

test("should render content header component", () => {
  const { getByText, getByTestId } = render(<ContentHeader />);
  expect(getByText("Live matches")).toBeTruthy();
  expect(getByTestId("desc")).toBeTruthy();
});

test("should render header", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Unibet")).toBeTruthy();
});

test("should render Footer", () => {
  const { getByTestId } = render(<Footer />);
  expect(getByTestId("footer")).toBeTruthy();
});

test("should render the article component", () => {
  const { getByTestId } = render(<Article />);
  expect(getByTestId("article")).toBeTruthy();
});

describe("test for util function", () => {
  it("should format past timestamp to 'YYYY-MM-DD'", () => {
    expect(getTimeStamp(gamesArray[0].event.start)).toEqual(
      "2020-03-24, 12:20 PM "
    );
  });

  it("should return approriate sport image based on the sport name given", () => {
    expect(getSportIcon(gamesArray[0].event.sport)).toBe("football.png");
    expect(getSportIcon(gamesArray[1].event.sport)).toBe("tennis.png");
  });
});
