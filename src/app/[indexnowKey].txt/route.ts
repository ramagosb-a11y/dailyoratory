import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<Record<string, string | string[] | undefined>> },
) {
  const configuredKey = process.env.INDEXNOW_KEY?.trim();
  const params = await context.params;
  const indexnowKey = typeof params.indexnowKey === "string" ? params.indexnowKey : undefined;

  if (!configuredKey || indexnowKey !== configuredKey) {
    notFound();
  }

  return new Response(configuredKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
