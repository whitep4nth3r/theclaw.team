export default class ContentfulData {
  static async getPageContent(slug) {
    const query = `{
      pageCollection(where: {slug: "${slug}"}, limit: 1) {
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

    const content = await ContentfulData.callApi(query);
    return content.pageCollection.items[0];
  }

  static async callApi(query) {
    try {
      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CTFL_SPACE_ID}/environments/master`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.CTFL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
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
