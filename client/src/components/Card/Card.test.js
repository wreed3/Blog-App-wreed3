import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";
import "@testing-library/jest-dom";

const mockData = {
	id: 1,
	title: "Test Title",
	postText: "Something to say",
	userName: "a.bourne",
};

describe("Card", () => {
  
	beforeEach(() => {
		global._fetch = global.fetch;
		global.fetch = jest.fn(() => {
			return Promise.resolve({
				json() {
					return Promise.resolve([mockData]);
				},
			});
		});
	});

	afterEach(() => {
		global.fetch = global._fetch;
	});

	it("should display a single post on the screen", async () => {
		//arrange
		render(
			<MemoryRouter>
				<Card />
			</MemoryRouter>
		);
    
		// act

		// assert

		expect(await screen.findByText(mockData.title)).toBeInTheDocument();
		expect(await screen.findByText(mockData.postText)).toBeInTheDocument();
	});
});
