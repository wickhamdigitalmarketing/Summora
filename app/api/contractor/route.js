export async function POST() {
  return Response.redirect(new URL('/contractors?submitted=1', 'http://localhost:3000'), 303);
}
