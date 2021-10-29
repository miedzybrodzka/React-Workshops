import { gql, useQuery } from "@apollo/client";

export const GET_TAG_BUNDLE_BY_ID = gql`
query tagBundleById($_id: MongoID!){
  tagBundleById(
   _id: $_id
  ){
    name
    _id
    description
    tags{
      name
    }
  }
}`;

const useTagBundle = (_id) => {
    console.log({ _id });
    const { loading, error, data } = useQuery(GET_TAG_BUNDLE_BY_ID, {
        variables: { _id: "" }
    });
    return { loading, error, data: data && data.tagBundleById };
};


export default useTagBundle;