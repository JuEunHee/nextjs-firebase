import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';
import { APP_TITLE } from '@/environments';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo
      titleTemplate={`%s | ${APP_TITLE}`}
      defaultTitle={APP_TITLE}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
      ]}
    />
    <Component {...pageProps} />
    <ToastContainer position="bottom-right" theme="colored" newestOnTop />
  </>
);

export default MyApp;
