function bodyPresenter<T>(status: number, body: T): { status: number, result: T } {
  return {
    status,
    result: body,
  };
}

export default bodyPresenter;
