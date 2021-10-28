import {gql} from '@apollo/client';


const Queries = {
  GET_PROFILE: gql`
    query getUser{
      getProfile{
        oauthId
          }
        	tagBundleMany{
            name
          }
      }
    `,
    GET_ENTRIES_FOR_DATE: gql`query getEntriesForDate($date: Date) {
      entryMany(filter: {date: $date}) {
        startTime
        endTime
        date
        tag {
          name
          tagBundle {
              name
          }
        }
        order
        copied
        }
      }
      `,

  GET_ALL_ENTRIES: gql`
   query GetAllEntries {
        entryMany {
          _id 
          startTime
          endTime
          tag {
            name
          }
        }
      }
    `,
}

export default Queries;

