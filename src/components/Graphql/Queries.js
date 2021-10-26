import {gql} from '@apollo/client';


const Queries = {
  GET_PROFILE: gql`
    query getUser{
      getProfile{
        oauthId
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
  CREATE_ENTRY: gql`
  mutation CreateEntry {
      createEntry(record:{tagBundleName:"selleo", tagName:"test", startTime:"00:22", endTime:"00:13"}){
        startTime
        endTime
      }
    }
  `
}

export default Queries;

