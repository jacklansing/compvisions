import { graphql, useStaticQuery } from 'gatsby';

const useTestimonialData = () => {
  const data = useStaticQuery(graphql`
    query {
      allTestimonialsCsv {
        edges {
          testimonial: node {
            quote: Quote
            student: Student
            course: Course
          }
        }
      }
    }
  `);

  return data.allTestimonialsCsv.edges;
};

export default useTestimonialData;
