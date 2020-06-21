import axios from "axios";
import mockItemsResponse from "../../json-server/api.json";
import { sendRequestForUser, sendRequestForEducations } from "../sendRequest";

jest.mock("axios");

describe("get resume information", () => {
  test("should get user information", async () => {
    axios.get.mockResolvedValue({ data: mockItemsResponse.users });

    const result = await sendRequestForUser();
    expect(result).toEqual(mockItemsResponse.users);
  });

  test("should get education information", async () => {
    axios.get.mockResolvedValue({ data: mockItemsResponse.educations });

    const result = await sendRequestForEducations();
    expect(result).toEqual(mockItemsResponse.educations);
  });
});
