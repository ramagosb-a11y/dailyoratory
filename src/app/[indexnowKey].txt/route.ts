export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  const configuredKey = getConfiguredIndexNowKey();
  return configuredKey ? [{ indexnowKey: configuredKey }] : [];
}

export async function GET(
  _request: Request,
  context?: { params?: Promise<Record<string, string | string[] | undefined>> },
) {
  const configuredKey = getConfiguredIndexNowKey();
  const params = (await context?.params) ?? {};
  const indexnowKey = typeof params.indexnowKey === "string" ? params.indexnowKey : undefined;

  if (!configuredKey || indexnowKey !== configuredKey) {
    return new Response("Not Found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    });
  }

  return new Response(configuredKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

function getConfiguredIndexNowKey() {
  return process.env.INDEXNOW_KEY?.trim() ?? "";
}
