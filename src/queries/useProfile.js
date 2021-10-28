import { gql, useQuery } from "@apollo/client";

export const GET_PROFILE = gql`
query getProfile{
  getProfile {
    _id
  }
}`;

const useProfile = () => {
    const { loading, error, data } = useQuery(GET_PROFILE);
    return { loading, error, data: data && data.getProfile };
};


export default useProfile;