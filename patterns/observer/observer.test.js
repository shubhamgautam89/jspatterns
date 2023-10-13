import Observable from "./observer";

describe("Observable", () => {
  let observable;
  beforeEach(() => {
    observable = new Observable();
  });

  test("subscribes a function and notiofies it", () => {
    const mockFunction = jest.fn();
    observable.subscribe(mockFunction);
    observable.notify("test-data");

    expect(mockFunction).toHaveBeenCalledWith("test-data");
  });

  test("unsubscirbes a function and does not notify it", () => {
    const mockFunction = jest.fn();
    observable.subscribe(mockFunction);
    observable.unsubscribe(mockFunction);

    observable.notify("test-data");

    expect(mockFunction).not.toHaveBeenCalled();
  });

  test("notifies only subscribed function", () => {
    const mockFunction1 = jest.fn();
    const mockFunction2 = jest.fn();

    observable.subscribe(mockFunction1);
    observable.notify("test-data");

    expect(mockFunction1).toHaveBeenCalledWith("test-data");
    expect(mockFunction2).not.toHaveBeenCalled();
  });
});
