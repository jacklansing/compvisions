import { graphql, useStaticQuery } from 'gatsby';

const useClassData = () => {
  const data = useStaticQuery(graphql`
    query {
      allCompvisionsClassesCsv {
        edges {
          class: node {
            category: Category
            cost: Cost
            dates: Dates
            hover_desc: Hover_Desc
            length: Length
            outline: Outline
            topic: Topic
          }
        }
      }
    }
  `);

  return data.allCompvisionsClassesCsv.edges;
};

export default useClassData;
