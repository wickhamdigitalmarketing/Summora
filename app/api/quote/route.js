export async function POST() {
  return Response.redirect(new URL('/contact?submitted=1', 'http://localhost:3000'), 303);
}
