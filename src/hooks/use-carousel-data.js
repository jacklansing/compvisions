import { graphql, useStaticQuery } from 'gatsby';

const useCarouselData = () => {
  const data = useStaticQuery(graphql`
    query {
      allCarouselCsv {
        edges {
          slide: node {
            header: Header
            body: Body
            link: Link
          }
        }
      }
    }
  `);

  return data.allCarouselCsv.edges;
};

export default useCarouselData;
