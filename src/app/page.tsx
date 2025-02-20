import prisma from '../lib/prisma';

async function getData() {
  // await prisma.todo.create({
  //   data: {
  //     title: "teste"
  //   }
  // })
  const data = await prisma.todo.findMany({
    select: {
      title: true,
    },
  });
  return data;
}

export default async function Home() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
