export { default } from "../faq";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
