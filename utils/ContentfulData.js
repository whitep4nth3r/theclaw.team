export default class ContentfulData {
  static async getPageContent(slug) {
    const query = `{
      pageCollection(where: {slug: "${slug}"}) {
        items {
          sys {
            id
          }
          slug
          title
          content {
            json
          }
        }
      }
    }`;

    const content = await ContentfulData.callApi(query);
    return content.pageCollection.items[0];
  }

  static async callApi(query) {
    console.log("CALLING API");
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
