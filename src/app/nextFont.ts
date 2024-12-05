import localFont from 'next/font/local'

export const spoqa = localFont({
  src: [
    {
      path: './fonts/spoqa/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
    },
    {
      path: './fonts/spoqa/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
    },
    {
      path: './fonts/spoqa/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
    },
    {
      path: './fonts/spoqa/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
    },
    {
      path: './fonts/spoqa/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
    },
  ],
})
