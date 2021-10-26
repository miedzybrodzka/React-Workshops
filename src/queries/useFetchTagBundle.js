import { gql, useQuery } from "@apollo/client";

export const GET_BUNDLE_MANY = gql`
query GetBundleMany{
  tagBundleMany {
    name
  }
}
`;

const useFetchTagBundle = () => {
  const {loading, error, data} = useQuery(GET_BUNDLE_MANY);
  return {loading, error, data: data && data.tagBundleMany};
};

export default useFetchTagBundle;
