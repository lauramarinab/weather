import { HomepageView } from "./HomepageView";
import { render, screen, waitFor } from "@testing-library/react";
import mockRouter from "next-router-mock/async";
import userEvent from "@testing-library/user-event";

describe(HomepageView.name, () => {
  it("should navigate to `today` page", async () => {
    render(<HomepageView />);

    userEvent.click(screen.getByText("Che tempo farà domani?"));

    await waitFor(() => {
      expect(mockRouter).toMatchObject({ asPath: "/today" });
    });
  });
});
