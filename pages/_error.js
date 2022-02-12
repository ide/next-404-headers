import Cookies from 'cookies';

export default function ErrorPage({ statusCode, visits }) {
  return (
    <>
      <h1>{statusCode}</h1>
      <p>You have visited the home page {visits} {visits === 1 ? 'time' : 'times'}.</p>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const storedVisits = parseInt(cookies.get('visits') ?? '0', 10);
  const visits = Number.isNaN(storedVisits) ? 0 : storedVisits;

  return {
    props: { statusCode: context.res.statusCode, visits },
  }
}
