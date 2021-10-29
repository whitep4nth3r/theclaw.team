export default class ContentfulData {
  static async getAwardNominationsByYear(year) {
    const variables = { year };

    const query = `query getAwardNominationsByYear($year: String!){
      awardCategoryCollection(where: { year: $year }) {
        items {
          sys{
            id
          }
          name
          linkedFrom {
            awardNominationCollection(limit: 10) {
              total
              items {
                sys{
                  id
                }
                nominee
                externalLink
                isWinner
                description
                image {
                  url
                  description
                  title
                  height
                  width
                }
              }
            }
          }
        }
      }
    }`;

    const data = await ContentfulData.callApi(query, variables);
    return data.awardCategoryCollection.items;
  }

  static async getPageContent(slug) {
    const variables = { slug };
    const query = `query getPageContentBySlug($slug: String!){
      pageCollection(where: {slug: $slug}, limit: 1) {
        items {
          sys {
            id
          }
          slug
          title
          metaDescription
          content {
            json
            links {
              entries {
                inline {
                  __typename
                  ... on Page {
                    sys {
                      id
                    }
                    title
                    slug
                  }
                }
              }
            }
          }
        }
      }
    }`;

    const content = await ContentfulData.callApi(query, variables);
    return content.pageCollection.items[0];
  }

  static async callApi(query, variables = {}) {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CTFL_SPACE_ID}/environments/master`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.CTFL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query, variables }),
        },
      ).then((response) => {
        return response.json();
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
