import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { TemplateCreate } from 'template'

export default function Create() {
  return <TemplateCreate />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userToken } = parseCookies(context)

  if (!!userToken) {
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
