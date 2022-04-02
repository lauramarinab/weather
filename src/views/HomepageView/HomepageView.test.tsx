import { HomepageView } from ".";
import { render, screen, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock/async";
import userEvent from "@testing-library/user-event";

describe(HomepageView.name, () => {
  it("should navigate to `today` page", async () => {
    render(<HomepageView />);

    userEvent.click(screen.getByText(/meteo oggi/i));

    await waitFor(() => {
      expect(mockRouter).toMatchObject({ asPath: "/today" });
    });
  });
});
