import { RenderingInfo } from '#/ui/rendering-info';

export const runtime = 'edge';

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' },
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500">{data.body}</p>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <RenderingInfo type="ssr" />
      </div>
    </div>
  );
}
