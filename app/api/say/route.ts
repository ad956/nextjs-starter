export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  //   the below isnt flexible and always require to use the same name(or the parameterName)
  //   const val = searchParams.get("name");
  //   return Response.json({ msg: `Welcome ${val}` });

  // flexible way to get any params
  const obj = Object.fromEntries(searchParams.entries());

  return Response.json({ obj });
}

type data = {
  id?: number;
  msg?: string;
};

export async function POST(req: Request) {
  const dataRec: data = await req.json(); // req.body() in express

  const { id, msg } = dataRec;
  return Response.json({ dataReceived: { id, msg } });
}
