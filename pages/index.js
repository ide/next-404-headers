import Cookies from 'cookies';

export default function Home({ visits }) {
  return (
    <>
      <h1>Home</h1>
      <p>You have visited this page {visits} {visits === 1 ? 'time' : 'times'}.</p>
    </>
  );}

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const storedVisits = parseInt(cookies.get('visits') ?? '0', 10);
  const visits = Number.isNaN(storedVisits) ? 0 : storedVisits;

  cookies.set('visits', visits + 1, { sameSite: 'lax' })

  return {
    props: { visits: visits + 1 },
  }
}
