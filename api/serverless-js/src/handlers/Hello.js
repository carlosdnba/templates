export default async () => ({
  statusCode: 200,
  body: JSON.stringify({
    serverOn: true,
    accessedAt: Date(),
  }),
});
