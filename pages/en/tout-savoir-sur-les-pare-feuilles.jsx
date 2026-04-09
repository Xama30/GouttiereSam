export { default } from "../tout-savoir-sur-les-pare-feuilles";

export function getStaticProps() {
  return {
    props: {
      locale: "en",
    },
  };
}
