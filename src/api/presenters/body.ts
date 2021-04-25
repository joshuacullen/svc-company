function responsePresenter<T>(
  status: number,
  body: T,
  link: { self: string },
): {
    status: number,
    result: T,
    _links: { self: string }
  } {
  return {
    _links: {
      self: link.self,
    },
    status,
    result: body,
  };
}

export default responsePresenter;
