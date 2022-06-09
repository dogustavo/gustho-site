import { GetServerSideProps } from 'next'
import { TemplateLogin } from 'template'
import { parseCookies } from 'nookies'

export default function Login() {
  return <TemplateLogin />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userToken } = parseCookies(context)

  if (userToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
