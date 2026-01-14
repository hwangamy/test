// Simulated HTTP request type
type Request = { query: { code?: string } };

export function handleRequest(req: Request) {
  const code = req.query.code || "";

  // BAD: executing untrusted input; this should trigger a CodeQL alert
  // for something like "Use of eval with user input"
  // eslint-disable-next-line no-eval
  eval(code);
}
