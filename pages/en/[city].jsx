import { getStaticProps as getCityStaticProps } from "../[city]";

export { default, getStaticPaths } from "../[city]";

export async function getStaticProps(context) {
  const result = await getCityStaticProps(context);

  if (!result || result.notFound) {
    return result;
  }

  return {
    ...result,
    props: {
      ...(result.props || {}),
      locale: "en",
    },
  };
}
